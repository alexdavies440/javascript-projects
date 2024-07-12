function randomFromArray(arr){
let i = Math.floor(Math.random() * arr.length);
return arr[i];
  //Your code here to select a random element from the array passed to the function.
}

let testArray = ['a', 'b', 'c', 'd', 'e', 'f'];
function testTheFunction() {
  let result;
  for (let j = 0; j < 21; j++) {
    console.log(randomFromArray(testArray));
  }

}
console.log(testTheFunction(testArray));

//TODO: Export the randomFromArray function.
