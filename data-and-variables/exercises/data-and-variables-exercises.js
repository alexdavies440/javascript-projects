// Declare and assign the variables below

let spaceShuttleName = "Determination";
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 383400;
const milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof spaceShuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKm);

// Calculate a space mission below

let milesToMars = distanceToMarsKm * milesPerKm;
let hrsToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hrsToMars / 24;

// Print the results of the space mission calculations below

console.log(spaceShuttleName + " will take " + daysToMars + " days to reach the Moon. ");

// Calculate a trip to the moon below

// Print the results of the trip to the moon below