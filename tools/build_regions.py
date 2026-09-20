"""Rebuild regions.js from official suburb outlines.

Usage (from the project root):
    python tools/build_regions.py

Edit REGIONS below to change the map. Each game region is a list of suburb names; the
suburbs are merged into one clean polygon. A suburb outline that is not yet in
tools/suburbs/ is downloaded from OpenStreetMap (Nominatim) the first time it is needed.

Needs: pip install shapely
After changing the map, bump the ?v= number on the regions.js script tag in index.html
so phones don't keep using the cached copy.
"""
import io
import json
import os
import re
import time
import urllib.parse
import urllib.request

from shapely.geometry import shape, mapping, Polygon, box
from shapely.ops import unary_union

# region display name -> suburbs that make it up
REGIONS = {
    "Kangaroo Point": ["Kangaroo Point"],
    "South Brisbane": ["South Brisbane"],
    "New Farm": ["New Farm"],
    "Brisbane City": ["Brisbane City"],   # neutral zone (see config.js)
    "Victoria Park": ["Herston", "Kelvin Grove"],
    "Spring Hill": ["Spring Hill", "Petrie Terrace"],
    "Red Hill/Paddington": ["Red Hill", "Paddington"],
    "Bowen Hills": ["Bowen Hills"],
    "The Valley": ["Fortitude Valley"],
    "Newstead/Teneriffe": ["Newstead", "Teneriffe"],
    "West End/Highgate Hill": ["West End", "Highgate Hill"],
    "Bulimba/Hawthorne/Balmoral": ["Bulimba", "Hawthorne", "Balmoral"],
    "Woolloongabba": ["Woolloongabba"],
    "East Brisbane/Norman Park": ["East Brisbane", "Norman Park"],
    "Milton": ["Milton"],
    "Auchenflower/Toowong": ["Auchenflower", "Toowong"],
}

# Places that are moved from one region to another, for game reasons rather than real geography.
# (place name as OpenStreetMap knows it, region that gains it, region that loses it)
TRANSFERS = [
    ("Roma Street Parklands", "Spring Hill", "Brisbane City"),
    # Clean border: everything in the neutral zone north of the parkland's southern tip (the rail
    # yards and the strip beside Wickham Park) also goes to Spring Hill. Roma Street station stays neutral.
    ("box:153.0050,-27.46515,153.0235,-27.4500", "Spring Hill", "Brisbane City"),
]

HERE = os.path.dirname(os.path.abspath(__file__))
SUBURB_DIR = os.path.join(HERE, "suburbs")
OUT = os.path.join(HERE, "..", "regions.js")
USER_AGENT = "brisbane-jet-lag-build/1.0"


def suburb_shape(name):
    path = os.path.join(SUBURB_DIR, "nom_%s.json" % name.replace(" ", "_"))
    if not os.path.exists(path):
        url = ("https://nominatim.openstreetmap.org/search?format=json&polygon_geojson=1&limit=3&q="
               + urllib.parse.quote(name + ", Brisbane, Queensland"))
        print("downloading", name)
        req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
        with urllib.request.urlopen(req) as r, open(path, "wb") as f:
            f.write(r.read())
        time.sleep(1.1)  # Nominatim allows one request per second
    found = [x for x in json.load(io.open(path, encoding="utf-8")) if x["geojson"]["type"] in ("Polygon", "MultiPolygon")]
    results = [x for x in found if x.get("osm_type") == "relation"] or found   # suburbs are relations; parks are often plain ways
    if not results:
        os.remove(path); raise SystemExit("No boundary found for: " + name)
    return shape(results[0]["geojson"]).buffer(0)


def merge(shapes):
    geom = unary_union(shapes).buffer(0.00001).buffer(-0.00001)       # weld shared seams
    polys = list(geom.geoms) if geom.geom_type == "MultiPolygon" else [geom]
    polys = [Polygon(p.exterior) for p in polys if p.area > 1e-7]      # drop slivers, fill pinholes
    return unary_union(polys).simplify(0.00002, preserve_topology=True)


def rounded(m):
    r = lambda c: [round(c[0], 6), round(c[1], 6)]
    if m["type"] == "Polygon":
        m["coordinates"] = [[r(c) for c in ring] for ring in m["coordinates"]]
    else:
        m["coordinates"] = [[[r(c) for c in ring] for ring in poly] for poly in m["coordinates"]]
    return m


built = {name: merge([suburb_shape(s) for s in suburbs]) for name, suburbs in REGIONS.items()}
for place, gains, loses in TRANSFERS:
    if place.startswith("box:"):                          # west,south,east,north rectangle
        area = box(*[float(v) for v in place[4:].split(",")]).intersection(built[loses]).buffer(0.00003)
    else:
        area = suburb_shape(place).buffer(0.00003)      # tiny overlap so the pieces weld together
    built[loses] = merge([built[loses].difference(area)])
    built[gains] = merge([built[gains], area])
    for other in built:                                   # never overlap any other region
        if other not in (gains, loses):
            built[gains] = built[gains].difference(built[other])
    built[gains] = merge([built[gains]])

features = []
for name, suburbs in REGIONS.items():
    rid = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")
    geom = built[name]
    features.append({"type": "Feature", "id": rid, "properties": {"id": rid, "name": name},
                     "geometry": rounded(mapping(geom))})
    print("%-32s %-13s %s" % (rid, geom.geom_type, ", ".join(suburbs)))

with io.open(OUT, "w", encoding="utf-8", newline="\n") as f:
    f.write("window.REGIONS = " + json.dumps({"type": "FeatureCollection", "features": features}, separators=(",", ":")) + ";\n")
print("wrote", os.path.normpath(OUT))
