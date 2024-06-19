// Initialize Variables below

let date = "Monday 2019-03-18";

let time = "10:05:34";

let astronautCount = 7;

let astronautStatus = "ready";

let averageAstronautMassKg = 80.7;

let crewMassKg = astronautCount * averageAstronautMassKg;

let fuelMassKg = 760000;

let shuttleMassKg = 74842.31;

let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;

let maximumMassLimit = 850000;

let fuelTempCelsius = -225;

let minimumFuelTemp = -300;

let maximumFuelTemp = -150;

let fuelLevel = "1000%";

let weatherStatus = "clear";

let preparedForLiftOff = true;

console.log(" ")
console.log(" ")
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <= 7) {

} else {
    astronautCount = ''; 
    console.log("Too many astronauts!");
}

// add logic below to verify all astronauts are ready

if (astronautStatus === "ready") {
    
} else {
    astronautStatus = '';
    console.log("Astronauts not ready!");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg <= maximumMassLimit) {

} else {
    totalMassKg = '';
    console.log("Total mass exceeded!");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius <= maximumFuelTemp && fuelTempCelsius >= minimumFuelTemp) {

} else {
    fuelTempCelsius = '';
    console.log("Fuel temperature out of range!");
}

// add logic below to verify the fuel level is at 100%

if (fuelLevel === "100%") {
     
} else {
    fuelLevel = '';
    console.log("Fuel level not at 100%!");
}
// add logic below to verify the weather status is clear

if (weatherStatus === "clear") {
    
} else {
    weatherStatus = '';
    console.log("The weather sucks!");
}

// Verify shuttle launch can proceed based on above conditions

 if (astronautCount && astronautStatus && totalMassKg && fuelTempCelsius && fuelLevel && weatherStatus) {
preparedForLiftOff = true;
 } else {
    preparedForLiftOff = false;
 }
 if (preparedForLiftOff === true) {
    console.log("All checks clear, prepared for liftoff!")
 } else {
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    console.log("PLEASE ADDRESS THE PROBLEMS ABOVE BEFORE PROCEEDING");
 }

 console.log("----------------------------------------------------------");
 console.log("Date: " + date);
 console.log("Time: " + time);
 console.log("Astronaut Count: " + astronautCount);
 console.log("Crew Mass: " + crewMassKg + " kg");
 console.log("Fuel Mass: " + fuelMassKg + " kg");
 console.log("Shuttle Mass: " + shuttleMassKg + " kg");
 console.log("Total Mass: " + totalMassKg) + " kg";
 console.log("Fuel Temperature: " + fuelTempCelsius + " Celsius");
 console.log("Weather Status: " + weatherStatus);
 
 console.log("----------------------------------------------------------");

 if (preparedForLiftOff === true) {
    console.log("We wish you a safe flight!");
 } else {
    console.log("We wish you would have a safe flight, but that will not be possible until all tests pass");
 }