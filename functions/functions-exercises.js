

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
    line += '#';
    } 
    return line;
    }

console.log(makeLine(5));

console.log('=====================');


function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++)
        square += (makeLine(size) + '\n');
    return square.slice(0, -1);
}

console.log(makeSquare(5));

console.log('=====================');


function makeRectangle(width, height) {
let rectangle = '';
for (let i = 0; i < height; i++) {
    rectangle += makeLine(width) + '\n';
}
//console.log(rectangle);
return rectangle.slice(0, -1);
}


console.log(makeRectangle(5, 3));

console.log('=====================');

function makeDownwardStairs(height) {
let stairs = '';
for (let i = 0; i < height; i++) {
stairs += (makeLine(i + 1) + '\n');

}
    return stairs.slice(0, -1); 
}

console.log(makeDownwardStairs(5));

console.log('=====================');

function makeSpaceLine(spaces, hashes) {
  let spaceLineSpace = '';
  let spaceLine = makeLine(spaces)
  for (i = 0; i < spaces; i++) {
    spaceLine = spaceLine.replace('!', ' ').replace('@', ' ').replace('#', ' ').replace('$', ' ').replace('%', ' ').replace('^', ' ').replace('&', ' ').replace('*', ' ').replace('?', ' ');
  }
  let hashLine = makeLine(hashes);
  spaceLineSpace = spaceLine + hashLine + spaceLine;
  return spaceLineSpace; 
}
console.log(makeSpaceLine(3, 5));

console.log('=====================');

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }

  console.log(makeIsoscelesTriangle(5));

  console.log('=====================');
  
  function reverse(string) {
    reversed = '';
    for (i = 0; i < string.length; i++) {
        reversed = string[i] + reversed;
    }
    return reversed;
  }
  

  function makeDiamond(height) {
    let diamond = '';
    diamond = makeIsoscelesTriangle(height) + '\n' + reverse(makeIsoscelesTriangle(height));
    return diamond;
  }

  console.log(makeDiamond(5));