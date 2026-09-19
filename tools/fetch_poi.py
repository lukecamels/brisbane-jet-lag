"""Fetch points of interest from OpenStreetMap and work out which game region each is in.

Usage (from the project root):
    python tools/fetch_poi.py [sudoku|boba|petrol]
Then open tools/poi-map.html through the local server.

Add a preset to PRESETS to look for something else. Each category is a label, a pin
colour, and a list of OpenStreetMap tag filters (= exact match, ~ regular expression).
"""
import io
import json
import os
import re
import urllib.parse
import urllib.request

from shapely.geometry import shape, Point

import sys

PRESETS = {
    "sudoku": ("Where to find a sudoku", [
        ("Newsagent",         "#d92d20", ['"shop"="newsagent"']),
        ("Bookshop",          "#7b3fe4", ['"shop"="books"']),
        ("Library",           "#0e9f6e", ['"amenity"="library"']),
        ("Supermarket",       "#f26b1d", ['"shop"="supermarket"']),
        ("Convenience store", "#1e88ff", ['"shop"="convenience"']),
    ]),
    "boba": ("Bubble tea shops", [
        ("Bubble tea", "#d92d20", ['"cuisine"~"bubble_tea"', '"shop"="bubble_tea"', '"name"~"Boba|Bubble Tea|Chatime|Gong Cha|Sharetea|CoCo|Presotea|Top Tea|Machi Machi|Tea Master|Happy Lemon|The Alley"']),
    ]),
    "petrol": ("Petrol stations", [
        ("Petrol station", "#d92d20", ['"amenity"="fuel"']),
    ]),
}
PRESET = sys.argv[1] if len(sys.argv) > 1 else "sudoku"
TITLE, CATEGORIES = PRESETS[PRESET]
BBOX = "-27.53,152.94,-27.41,153.11"

HERE = os.path.dirname(os.path.abspath(__file__))
regs = json.loads(io.open(os.path.join(HERE, "..", "regions.js"), encoding="utf-8").read()[len("window.REGIONS = "):].rstrip().rstrip(";"))
shapes = [(f["properties"]["name"], shape(f["geometry"])) for f in regs["features"]]

parts = "".join('nwr[%s](%s);' % (flt, BBOX) for _, _, flts in CATEGORIES for flt in flts)
query = "[out:json][timeout:90];(" + parts + ");out center tags;"
req = urllib.request.Request("https://overpass-api.de/api/interpreter",
                             data=urllib.parse.urlencode({"data": query}).encode(),
                             headers={"User-Agent": "brisbane-jet-lag-build/1.0"})
raw = json.load(urllib.request.urlopen(req, timeout=120))

def category(tags):
    for label, _, flts in CATEGORIES:
        for flt in flts:
            if "~" in flt:
                k, v = [x.strip('"') for x in flt.split("~")]
                if re.search(v, tags.get(k, "")):
                    return label
            else:
                k, v = [x.strip('"') for x in flt.split("=")]
                if tags.get(k) == v:
                    return label
    return None

out = []
table = {n: {c[0]: 0 for c in CATEGORIES} for n, _ in shapes}
for e in raw["elements"]:
    t = e.get("tags", {})
    cat = category(t)
    if not cat:
        continue
    lat = e.get("lat") or e["center"]["lat"]
    lon = e.get("lon") or e["center"]["lon"]
    region = next((n for n, s in shapes if s.contains(Point(lon, lat))), None)
    addr = " ".join(x for x in [t.get("addr:housenumber", ""), t.get("addr:street", "")] if x)
    out.append({"name": t.get("name") or t.get("brand") or cat, "cat": cat, "lat": lat, "lon": lon, "region": region, "addr": addr})
    if region:
        table[region][cat] += 1

data = {"title": TITLE, "categories": [{"label": c[0], "color": c[1]} for c in CATEGORIES], "points": out}
io.open(os.path.join(HERE, "poi.js"), "w", encoding="utf-8", newline="\n").write("window.POI = " + json.dumps(data) + ";\n")

heads = [c[0] for c in CATEGORIES]
print("%-30s" % "Region" + "".join("%-12s" % h[:11] for h in heads))
for n, row in table.items():
    print("%-30s" % n + "".join("%-12s" % row[h] for h in heads))
print(len(out), "places found,", sum(sum(r.values()) for r in table.values()), "inside game regions")
