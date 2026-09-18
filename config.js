// ---- Brisbane Territory game settings ----
window.GAME_CONFIG = {
  // Change this to start a brand-new game with a clean map (old claims stay under the old id).
  gameId: "brisbane-game-1",

  // Passcode players must enter to log in as admin. Set to "" to allow anyone.
  adminCode: "jetlag",

  // Shared-state backend. Leave as null for single-device mode (claims stay on this phone only).
  // To share claims between everyone, paste the Firebase web-app config object here, e.g.
  // firebase: { apiKey: "...", authDomain: "...", databaseURL: "https://....firebasedatabase.app", projectId: "...", appId: "..." },
  firebase: {
    apiKey: "AIzaSyAOo4lwUYPXpaUYKLsVfmc-J266HM0-GCg",
    authDomain: "brisbane-jet-lag.firebaseapp.com",
    databaseURL: "https://brisbane-jet-lag-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "brisbane-jet-lag",
    storageBucket: "brisbane-jet-lag.firebasestorage.app",
    messagingSenderId: "196319972176",
    appId: "1:196319972176:web:a1a52086c15daf45fcba55",
  },
};
