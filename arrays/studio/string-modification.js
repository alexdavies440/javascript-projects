const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let tail = str.slice(0,3);
console.log(tail);

let str2 = str.slice(3) + tail;
console.log(str2);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`OG sring is ${str} and modified string is ${str2}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let userInput = input.question("Please enter number of letters to relocate.");


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (Number(userInput) > str2.length) {
    let movingChar = 3;
    console.log(`Your input ${userInput} exceeds string character length.
    New number of characters to move is 3`);
} else {
    movingChar = (Number(userInput));
}