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
  "albion-hamilton": null,   // Albion/Hamilton
  "the-valley": null,   // The Valley
  "newstead-teneriffe": null,   // Newstead/Teneriffe
  "west-end-highgate-hill": null,   // West End/Highgate Hill
  "bulimba-hawthorne-balmoral": null,   // Bulimba/Hawthorne/Balmoral
  "woolloongabba": null,   // Woolloongabba
  "east-brisbane-norman-park": {
    title: "Predict a Fill-Up",
    description: "Go to a petrol station in this area and pick a driver who is about to start filling up. Guess how many litres they will put in, watch them fill up, then check the pump to see how close you were.",
    tiers: {
      1: "Guess within 30% of the litres shown on the pump.",
      2: "Guess the correct tens digit of the litres.",
      3: "Guess the correct tens digit before they start pumping.",
    },
    note: "For 1 or 2 points you may watch the whole fill-up before guessing. Tens digit: 15 L is 1, 42 L is 4, 8 L is 0. Say your guess out loud before anyone checks the pump.",
  },
  "milton": null,   // Milton
  "auchenflower-toowong": null,   // Auchenflower/Toowong
};
