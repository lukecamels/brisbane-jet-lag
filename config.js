// ---- Brisbane Territory game settings ----
window.GAME_CONFIG = {
  // Change this to start a brand-new game with a clean map (old claims stay under the old id).
  gameId: "brisbane-game-1",

  // Passcode players must enter to log in as admin. Set to "" to allow anyone.
  adminCode: "jetlag",

  // Shared-state backend. Leave as null for single-device mode (claims stay on this phone only).
  // To share claims between everyone, paste the Firebase web-app config object here, e.g.
  // firebase: { apiKey: "...", authDomain: "...", databaseURL: "https://....firebasedatabase.app", projectId: "...", appId: "..." },
  firebase: null,
};
