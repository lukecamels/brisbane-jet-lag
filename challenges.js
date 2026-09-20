// ---- Challenges, one per region ----
// Shown to players only while they are standing inside that region.
// Leave a region as null until its challenge is written.
// Each entry has: title, description, tiers (what earns 1, 2 and 3 points), and an optional note.
// A challenge can list only some tiers (the other point buttons stay off), and noFail: true turns off the Fail button.
// See east-brisbane-norman-park below for a filled-in example.
// After editing, bump the ?v= number on the challenges.js script tag in index.html.
window.CHALLENGES = {
  "kangaroo-point": null,   // Kangaroo Point
  "south-brisbane": null,   // South Brisbane
  "new-farm": null,   // New Farm
  "victoria-park": null,   // Victoria Park
  "spring-hill": {
    title: "Timed Hide and Seek",
    description: "Go to one of the entrances of Roma Street Parklands. This whole challenge takes place inside the parklands and nobody on your team may leave until it is over. Choose one hider. Everyone else is a seeker. You may not discuss any strategy beforehand. Lock in your point attempt, then the hider uses a random number generator on their phone to secretly generate a target between 2 and 10 minutes. The hider then gets 10 minutes to hide. Everyone starts a 10 minute timer at the same moment, and the seekers wait at the entrance facing away from the park until it goes off. When it does, the seekers put their phones away and start seeking, and the hider starts a fresh timer to measure how long they take to be found. The seekers must find the hider as close to the secret target time as possible. Seekers may split up and search the park independently if they want to. The hider is found the moment any seeker first sees them, and that seeker must call it immediately.",
    tiers: {
      1: "Found within 2 minutes either side of the target.",
      2: "Found within 1 minute either side of the target.",
      3: "Found within 20 seconds either side of the target.",
    },
    note: "The seekers may not know the target, and once seeking starts they may not look at any clock or timer until the hider is found. Once hidden, the hider must stay in place and may not signal or communicate with the seekers in any way. You may not do any research or use any tools other than what this challenge requires.",
  },
  "red-hill-paddington": {
    title: "Tell Charlie We Say Hi",
    description: "Charlie really wanted to come today and play with everyone, so let's give him that experience! Spend 5 minutes hanging out with Charlie. This task cannot be failed, only abandoned. It is a guaranteed 2 points.",
    tiers: {
      2: "Spend 5 minutes hanging out with Charlie.",
    },
    noFail: true,   // the Fail button stays off for this one
  },
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
  "newstead-teneriffe": {
    title: "Predict Business",
    description: "Predict how many people will walk in through a single entrance to a business in a 5 minute period. Select one entrance to a business. You may watch it for as long as you would like before starting. When you are ready, lock in your prediction and your difficulty, then start a 5 minute timer. Count every person who walks in through that entrance during the window. Anyone walking in counts, staff and customers alike, and each person counts at most once. Compare your prediction against your count and if they are close enough you pass this challenge. If fewer than 5 people enter during your window, you fail this challenge.",
    tiers: {
      1: "Guess within 50% of the actual count.",
      2: "Guess within 25% of the actual count.",
      3: "Guess exactly the same as the actual count.",
    },
    note: "No messing with things: you may not do anything to influence who enters. You may not have any of your team members enter the business or instruct others to do so.",
  },
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
    title: "Get Lucky",
    description: "Some games require skill, others just require dumb luck. Is today your lucky day? Acquire a coin and go to [LOCATION TO BE CHOSEN]. Flip the coin and get the required number of heads in a row. You must choose your threshold before flipping any coins and cannot change it. There is no failing this task other than giving up. Your whole team must remain at [LOCATION] for the entire challenge. If anyone on your team leaves, you forfeit this challenge.",
    tiers: {
      1: "6 heads in a row.",
      2: "8 heads in a row.",
      3: "9 heads in a row.",
    },
    note: "Only one coin can be getting flipped at a time. Every flip must be a genuine flip that you are not trying to influence in any way. You may not do any research or use any tools other than what this challenge requires.",
    needs: "A specific spot to be named in the text (replace the two LOCATION placeholders when assigning)",
  },
  {
    title: "Count the Nerds",
    description: "Nerds are taking over the world, let's keep a track of them. Acquire some Nerds (the candy, specifically) and designate an eater. The eater must be blindfolded. Nobody can eat any Nerds before the attempt is started. Use a random number generator on your phone to generate a number from the range below (based on your chosen difficulty). The people preparing the Nerds must remove all clumps, so that only single Nerds are used. Feed that many Nerds to the eater, who cannot know the number. The Nerds must all be fed at the same time, not individually. The eater must then correctly guess the number of Nerds placed in their mouth.",
    tiers: {
      1: "Between 3 and 12 Nerds.",
      2: "Between 15 and 30 Nerds.",
      3: "Between 20 and 50 Nerds.",
    },
    note: "No signalling: nobody may communicate the number to the eater in any way. The eater must count the Nerds using only their mouth. You may not do any research or use any tools other than what this challenge requires.",
    needs: "Somewhere selling Nerds (supermarket, convenience store, servo, lolly shop)",
  },
];
