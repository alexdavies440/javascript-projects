//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

const input = require('readline-sync');

let startingFuelLevel = 0;
let astronautNum = 0;
let shuttleAltitude = 0;



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
// Wouldn't any number between 5000 and 30000 be a positive integeter by default? 
  while (startingFuelLevel <= 5000 || startingFuelLevel > 30000 || isNaN(startingFuelLevel)) {
    //console.log("\n >>> Value must be between 5000 and 30000. \n")
    startingFuelLevel = input.question("\nEnter starting fuel level: ");
    console.log('');
  }

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
while (astronautNum < 1 || astronautNum > 7) {
  //console.log("\n >>> Value must be 1 - 7. \n")
  astronautNum = input.question("How many astronauts are there? ");
  console.log('');
}

  

//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (startingFuelLevel-100*astronautNum >= 0) {
  shuttleAltitude += 50;
  startingFuelLevel -= 100 * astronautNum;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${shuttleAltitude}km. \n`);

// while (shuttleAltitude <= 2000) {
//   console.log(shuttleAltitude);
//   console.log("Failed to reach orbit")
// } 
// console.log("Orbit achieved!");

let status = "";

if (shuttleAltitude >= 2000) {
  status = "Orbit achieved!";
} else {
  status = "Failed to reach orbit."
}
console.log(`Status: ${status} \n`);