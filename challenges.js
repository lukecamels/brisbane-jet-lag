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
  "bowen-hills": {
    title: "Win at Sideshow Alley",
    description: "Sideshow Alley loves its carnival games. My favourite is the one with the tower of cans. In your backpack you should have ten red cups. Assemble them into a tower (4 on the bottom, then 3, 2, 1) on a stable, flat surface. Choose any item you want to be your ball. Throw the ball at the tower and knock down all of the cups to pass this challenge. A throw means you must release your ball from that far away and not touch it (with anything) during its travel to the cups.",
    note: "Knocked down means toppled or fallen off the surface it was on. Any cup still standing on the surface it started on is not knocked down. You do not rebuild the tower between throws. Your ball can be anything at all, but only that item may touch the cups. Measure the distance with the iPhone Measure app. You may not do any research or use any tools other than what this challenge requires.",
    tiers: {
      1: "3 throws from 5m.",
      2: "2 throws from 10m.",
      3: "1 throw from 15m.",
    },
  },
  "the-valley": null,   // The Valley
  "newstead-teneriffe": null,   // Newstead/Teneriffe
  "west-end-highgate-hill": {
    title: "Gather Exact Change",
    description: "Choose a store. You may only enter one store and you may not enter the store before selecting it as your store for this challenge. Once you enter, you must acquire one of each Australian coin (5c, 10c, 20c, 50c, $1 and $2). All purchases must be paid in cash from your starting amount, and only coins received as change count. You may not inform anyone in the store of what you are attempting to do or ask for change in any specific way, you may only purchase items and receive change for those purchases. You may not purchase multiple of any item.",
    note: "You may not do any research or use any tools other than what this challenge requires.",
    tiers: {
      1: "Start with $20.",
      2: "Start with $10.",
      3: "Start with $5.",
    },
  },
  "bulimba-hawthorne-balmoral": {
    title: "Rank Google Reviews",
    description: "You must take pictures of multiple things in this region that you expect to have Google reviews, and you must stay in the region for the whole challenge. Until your guess is locked in, you may not use your phone for anything other than taking photos. You must then order them from the worst to the best and lock in your guess. Then look up each of these things on Google Maps. The rating that counts is the one shown on Google Maps, to one decimal place. If you get them in exactly the correct order then you pass this challenge. If any two of your things have the same Google rating, you fail this challenge. If there is no Google review for any of the things you selected, you fail this challenge.",
    note: "You may not do any research or use any tools other than what this challenge requires.",
    tiers: {
      1: "Select 3 things.",
      2: "Select 5 things.",
      3: "Select 7 things.",
    },
  },
  "woolloongabba": null,   // Woolloongabba
  "east-brisbane-norman-park": {
    title: "Predict a Fill-Up",
    description: "Go to a petrol station in this area and pick a driver who is about to start filling up. The driver must be a stranger and must be filling up a car (not a motorbike, truck or jerry can). You must lock in your driver (and your point attempt) before they start filling up and cannot change once they start. After they have finished filling up, lock in a guess for how much petrol they put in. You may not look at the pump display or the car's dashboard until your guess is locked in. Once you have locked in your guess, go to the pump and confirm the number. You may not practice, do any research or use any tools like a timer.",
    tiers: {
      1: "Guess a quantity in litres. Your guess must be within 30% of the actual amount on the pump to pass.",
      2: "Guess the tens digit. Guess correctly to pass. e.g. \"1\" for 15L, \"4\" for 42L or \"0\" for 8L.",
      3: "Guess the tens digit *before* they start filling up. Guess correctly to pass.",
    },
  },
  "milton": null,   // Milton
  "auchenflower-toowong": null,   // Auchenflower/Toowong
};

// ---- Unassigned challenges ----
// Written but not yet placed in a region. The game ignores this list.
// To use one, move it into window.CHALLENGES above under a region id.
window.UNASSIGNED_CHALLENGES = [
  {
    title: "Count the Boba",
    description: "I've been trying to make my own bubble tea recently, but I don't know how many tapioca pearls to put in it. Find out how many are in one for me. Go to a bubble tea store and order a bubble tea with tapioca pearls (get yourself something you would like). It must be a standard order with no special requests. Before drinking the bubble tea, guess how many tapioca pearls there are in it (and select your point attempt). Once you have submitted your guess, drain the tea and count them. Your guess must be within the below percentage of the actual count to pass this challenge.",
    note: "You may not do any research or use any tools other than what this challenge requires.",
    tiers: {
      1: "Within 50% of the actual count.",
      2: "Within 25% of the actual count.",
      3: "Within 8% of the actual count.",
    },
    needs: "A bubble tea shop",
  },
  {
    title: "Solve a Sudoku",
    description: "Acquire a paper copy of a sudoku and a pen. Solve the sudoku with the pen. You may not make any mistakes: if you write the wrong number in a square, you fail this challenge. You may make working markings.",
    tiers: {
      1: "Solve any sudoku.",
      2: "Solve a \"medium\" sudoku.",
      3: "Solve a \"hard\" sudoku.",
    },
    note: "To count as medium or hard, the difficulty must be printed on the puzzle itself. A puzzle with no printed difficulty only counts for 1 point. You may not look at any answers or solutions. You may not do any research or use any tools other than what this challenge requires.",
    needs: "Somewhere selling newspapers or puzzle books (newsagent, supermarket, convenience store)",
  },
  {
    title: "Film a Bird",
    description: "I want to make a Brisbane nature documentary, get me some footage. Choose a live, wild bird and lock in your point attempt before you start filming. You must film one specific individual bird, and you must be able to track which bird it is for the whole video. Keep it continuously in the footage, in a single continuous take, for as long as your points tally requires. If the bird is ever not visible, this challenge is failed.",
    tiers: {
      1: "5 minutes, free movement.",
      2: "10 minutes, the person holding the camera may not move their feet once the film has started.",
      3: "15 minutes, the camera may not move. It must be set down and left alone, not held or touched, for the whole video.",
    },
    note: "The bird must be identifiable as a bird at the zoom you are at. The bird cannot be fully obscured by anything. This includes if a person walks between you and the bird or if the bird walks behind anything solid. You may not do any research or use any tools other than what this challenge requires.",
    needs: "Anywhere with birds (parks, riverside, anywhere with ibis)",
  },
  {
    title: "Predict Business",
    description: "Predict how many customers a business will have enter their premises in a 10 minute period. When you choose to start this challenge, select a difficulty and start a timer. Count the number of people that enter that business during the 10 minute window. Compare your prediction against your count and if they are close enough you pass this challenge. The business you select must have at least 5 customers during your 10 minute window. You may watch the business for as long as you would like before starting your 10 minute window.",
    tiers: {
      1: "Count within 50% of guess.",
      2: "Count within 25% of guess.",
      3: "Count exactly the same as guess.",
    },
    note: "You may not have any of your team members enter the business or instruct others to do so. You may not do any research or use any tools other than what this challenge requires.",
    needs: "A steady stream of foot traffic into shops or cafes",
    suggestedRegion: "newstead-teneriffe",
  },
];
