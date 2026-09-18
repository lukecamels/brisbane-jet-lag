# Brisbane Jet Lag

A Jet Lag-style territory game for Brisbane. Players pick Team Orange or Team Purple, share their
location, and get prompted to claim a suburb when they walk into one nobody holds. An admin can
hand suburbs to either team, reset the game, and simulate a location for testing.

## Files
- `index.html` – the whole app (map, login, claim flow, admin tools)
- `regions.js`  – the 13 suburb boundaries, converted from the Google My Maps KML
- `config.js`   – game id, admin passcode, neutral zones, and the shared-database settings
- `tools/`      – `build_regions.py` rebuilds `regions.js` from official suburb outlines (edit the REGIONS list in it to change the map); `suburbs/` caches the downloaded outlines; `original-mymaps.kml` is the hand-drawn map this started from

## Hosting
It is a static site: upload these three files to any static host (GitHub Pages, Netlify, Cloudflare
Pages, Firebase Hosting). Location sharing only works over HTTPS, which all of those provide.

## Making claims shared between phones (Firebase)
Without a database the game runs in single-device mode (claims stay on that phone).
1. Go to https://console.firebase.google.com and create a project (Analytics off is fine).
2. Build > Realtime Database > Create database > start in **test mode**.
3. Project settings (gear icon) > Your apps > Web (</>) > register an app > copy the `firebaseConfig` object.
4. Paste it into `config.js` as the `firebase:` value and redeploy.
5. Test mode rules expire after 30 days. To keep it open for a longer game, set the rules to:
   ```json
   { "rules": { "games": { ".read": true, ".write": true } } }
   ```

## Settings in config.js
- `gameId`   – change it to start a fresh game with a clean map
- `adminCode` – passcode for the Admin login (default `jetlag`; set to `""` to disable)

## Working on it locally
Run `python -m http.server 8765` in this folder and open http://localhost:8765. Live site: https://lukecamels.github.io/brisbane-jet-lag/ (GitHub Pages serves the `main` branch, so every push is a deploy).
