//Exercise #1: Construct for loops that accomplish the following tasks:
    // a. Print the numbers 0 - 20, one number per line.

    for (let i = 0; i < 21; i++) {
      console.log(i);
    }
    console.log('\n');
    // b. Print only the ODD values from 3 - 29, one number per line.

    for (let i = 3; i < 30; i += 2) {
      console.log(i);
    }
    console.log('\n');
    // c. Print the EVEN numbers 12 to -14 in descending order, one number per line.

    for (let i = 12; i > -14; i -= 2) {
      console.log(i);
    }
    console.log('\n');
    // d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). 
    for (let i = 50; i >= 20; i--) {
      if (i % 3 === 0) {
        console.log(i);
      }
    }
console.log('\n');
// Exercise #2: 
// Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

let name = "LaunchCode";
let array = [1, 5, 'LC101', 'blue', 42];

// Construct ``for`` loops to accomplish the following tasks:
//   a. Print each element of the array to a new line.
//   b. Print each character of the string - in reverse order - to a new line. 

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log('\n');

for (let i = name.length -1; i >= 0; i--) {
  console.log(name[i]);
}
 console.log('\n');

 console.log("this is the book example");

 let reversed = "";
 let reversed2 = "";

 for (let i = 0; i < name.length; i++) {
  reversed = name[i] + reversed;
 }
 for (let i = 0; i < reversed.length; i++) {
  console.log(reversed[i]);
}

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

  let numbers = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  let oddNumbers = [];
  let evenNumbers = [];
  
  //console.log(numbers.length);
  // numbers.sort((a, b) => a - b);
  // console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
//console.log(Boolean(numbers[i] % 2 === 0)); 
if (numbers[i] % 2 === 0) {
  evenNumbers.push(numbers[i])
  //evenNumbers = (String(evenNumbers));
  //evenNumbers = evenNumbers.split(', ');
  //console.log(evenNumbers);
  //console.log(typeof(evenNumbers));
  }
}

for (let i = 0; i < numbers.length; i++) {
  //console.log(Boolean(numbers[i] % 2 === 0)); 
  if (numbers[i] % 2 === 1 || numbers[i] % 2 === -1) {
    oddNumbers.push(numbers[i]);
    //oddNumbers = (String(oddNumbers).split(', '))
    //console.log(oddNumbers);
    //console.log(typeof(oddNumbers));
  }
}

console.log("Even: " + evenNumbers);
console.log("Odd: " + oddNumbers);
