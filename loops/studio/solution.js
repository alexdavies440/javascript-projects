const input = require('readline-sync');

// Part A: #1 Populate these arrays

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];




function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals) {
  let pantry = [protein, grains, veggies, beverages, desserts];
  let meals = [];
  
  /// Part A #2: Write a ``for`` loop inside this function
  /// Code your solution for part A #2 below this comment (and above the return statement) ... ///

  for (i = 0; i < numMeals; i++) { //outside for loop that runs everything inside it once for every number of meals
    let eachMeal= []; //array that stores individual meals
    for (ii = 0; ii < pantry.length; ii++) { // nested for loop that runs once for every pantry category 
      eachMeal.push(pantry[ii][i]);
    }
    meals.push(eachMeal); // creates an array: meals that is populated by an array for each meal
  }
/* Basically what is happening is that a for loop runs that contains a nested for loop. For every time the nested for 
loop runs, it cycles through each pantry category, selecting one of each. Since this is inside an outer loop, the cycle
repeats for however many times the outer loop is set to, in this case, the number of meals. In other words, for every
meal, the nested loop picks one item from each category. */
  return meals;
}


function askForNumber() {
  let numMeals;

  while (numMeals < 1 || numMeals > mealAssembly.length || isNaN(numMeals)) {
    numMeals = input.question("How many meals would you like to make? ");
    while (numMeals < 1 || numMeals > mealAssembly.length || isNaN(numMeals)) {
      console.log(`Sorry, the maximum numer of guests the pantry can accomdate is ${mealAssembly.length}`);
      break;
    }
    
  }
  
  
  /// CODE YOUR SOLUTION TO PART B here ///

  return numMeals;
}


function generatePassword(string1, string2) {
  let code = '';

  for (i = 0; i < string1.length && string2.length; i++) {
    code += string1[i] + string2[i];
  }
  /// Code your Bonus Mission Solution here ///

  return code;
}

function runProgram() {
  
  /// TEST PART A #2 HERE ///
  /// UNCOMMENT the two lines of code below that invoke the mealAssembly function (starting with 'let meals =') and print the result ///
  /// Change the final input variable (aka numMeals) here to ensure your solution makes the right number of meals ///
  /// We've started with the number 2 for now. Does your solution still work if you change this value? ///
  
  let meals = mealAssembly(protein, grains, veggies, beverages, desserts, 5);
  //console.log(meals)
  

  /// TEST PART B HERE ///
  /// UNCOMMENT the next two lines to test your ``askForNumber`` solution ///
  /// Tip - don't test this part until you're happy with your solution to part A #2 ///
  
  let mealsForX = mealAssembly(protein, grains, veggies, beverages, desserts, askForNumber());
  console.log(mealsForX);

    /// TEST PART C HERE ///
  /// UNCOMMENT the remaining commented lines and change the password1 and password2 strings to ensure your code is doing its job ///

  console.log("Time to run the password generator so we can update the menu tomorrow." + '\n')
  let password1 = input.question("Enter a word: ");
  console.log('');
  let password2 = input.question(`Enter a number that is ${password1.length} digits long: `);
  console.log('');
  console.log(`The new password is: ${generatePassword(password1, password2)}`);
}

module.exports = {
  protein: protein,
  grains: grains,
  veggies: veggies,
  beverages: beverages,
  desserts: desserts,
  mealAssembly: mealAssembly,
  askForNumber: askForNumber,
  generatePassword: generatePassword,
  runProgram: runProgram
};