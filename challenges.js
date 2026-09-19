// ---- Challenges, one per region ----
// Shown to players only while they are standing inside that region.
// Leave a region as null until its challenge is written.
// Each entry has: title, description, tiers (what earns 1, 2 and 3 points), and an optional note.
// See east-brisbane-norman-park below for a filled-in example.
// After editing, bump the ?v= number on the challenges.js script tag in index.html.
window.CHALLENGES = {
  "kangaroo-point": null,   // Kangaroo Point
  "south-brisbane": null,   // South Brisbane
  "new-farm": null,   // New Farm
  "victoria-park": null,   // Victoria Park
  "spring-hill": null,   // Spring Hill
  "red-hill-paddington": null,   // Red Hill/Paddington
  "bowen-hills": null,   // Bowen Hills
  "the-valley": null,   // The Valley
  "newstead-teneriffe": null,   // Newstead/Teneriffe
  "west-end-highgate-hill": {
    title: "Gather Exact Change",
    description: "Choose a store. You may only enter one store and you may not enter the store before selecting it as your store for this challenge. Once you enter, you must acquire one of each Australian coin. You may not inform anyone in the store of what you are attempting to do or ask for change in any specific way, you may only purchase items and receive change for those purchases. You may not purchase multiple of any item.",
    tiers: {
      1: "Start with $20.",
      2: "Start with $10.",
      3: "Start with $5.",
    },
  },
  "bulimba-hawthorne-balmoral": null,   // Bulimba/Hawthorne/Balmoral
  "woolloongabba": null,   // Woolloongabba
  "east-brisbane-norman-park": {
    title: "Predict a Fill-Up",
    description: "Go to a petrol station in this area and pick a driver who is about to start filling up. You must lock in your driver (and your point attempt) before they start filling up and cannot change once they start. After they have finished filling up, lock in a guess for how much petrol they put in. Once you have locked in your guess, go to the pump and confirm the number. You may not practice, do any research or use any tools like a timer.",
    tiers: {
      1: "Guess a quantity in litres. Guess within 30% of the correct value to pass.",
      2: "Guess the tens digit. Guess correctly to pass. e.g. \"1\" for 15L, \"4\" for 42L or \"0\" for 8L.",
      3: "Guess the tens digit *before* they start filling up. Guess correctly to pass.",
    },
  },
  "milton": null,   // Milton
  "auchenflower-toowong": null,   // Auchenflower/Toowong
};
