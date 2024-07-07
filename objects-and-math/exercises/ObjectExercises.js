let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {return Math.floor(Math.random() * 11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {return Math.floor(Math.random() * 11)}
};

let chimpanzee = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {return Math.floor(Math.random() * 11)}
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {return Math.floor(Math.random() * 11)}
};

let tardigrade = {
   name: "Almina",
   species: "Targigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() {return Math.floor(Math.random() * 11)}
};

let crew = [superChimpOne, salamander, chimpanzee, beagle, tardigrade];

// for (let i = 0; i < crew.length; i++) {
//   crew[i]["astronautID"] = i;
//   crew[i]["move"] = 0;;
// }

console.log(crew);

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

function crewReports(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}. `
}

for (let i = 0; i < crew.length; i++) {
   console.log(crewReports(crew[i]));
}


// Start an animal race!

let results = [];

function fitnessTest(array) {
   for (let i = 0; i < array.length; i++) {  //Loops through each crew member in array
      let steps = 0;
      let turns = 0;
      while (steps <= 20) {                 //Checks to see if the number of steps is equal to or less than 20, if so keep looping
         steps = steps + array[i].move();   // adds value of steps to previous value, totalling steps
         turns++;                           // tells it to go another turn if steps are still less than 20 
      }
      //console.log(`${array[i].name} took ${turns} turns to take 20 steps.`);
      results.push(`${array[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
}
//console.log(superChimpOne.move());
console.log(fitnessTest(crew));

//console.log(results);
