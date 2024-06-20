//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.

let element1 = ['hydrogren', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];


//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.

let table = [];
table.push(element1,element2, element26);
console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

console.log(table[1]);

//prints index1 of the multi-dimensional array, so the second array 

console.log(table[1][1]);

//prints index 1 within the array at index 1, so it prints the second value within the second array within the multi-dimensinal array

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

console.log(table[0][2]);
console.log(table[1][0]);
console.log(table[2][1]);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.

let article = ['the', 'a', 'some'];
let noun = ['dog', 'man', 'goose','sunday brunch', 'no credit score', 'coffee','Tuesday', 'morning'];
let verb = ['goes', 'eats', 'has', 'is', 'extrudes','fascilitates', 'drinks', 'enjoys'];
let objectPronoun = ['he', 'she', 'it'];
let preposition = ['to', 'in', 'on', 'within', 'of', 'beyond'];

let wordBank = [];
wordBank.push(article, noun, verb, objectPronoun, preposition);
console.log(wordBank);

let message1 = [wordBank[0][0], wordBank[1][3], wordBank[2][2], wordBank[1][5], wordBank[4][1], wordBank[0][0], wordBank[1][7]];
console.log(message1);

let message2 = [wordBank[0][1], wordBank[1][2], wordBank[2][2], wordBank[1][4]];
console.log(message2);

let message3 = [wordBank[0][2], wordBank[1][0], wordBank[2][4], wordBank[1][3], wordBank[4][2], wordBank[1][6]];
console.log(message3);

console.log(message1[0]);
console.log(message2[1]);
console.log(message3[1]);


