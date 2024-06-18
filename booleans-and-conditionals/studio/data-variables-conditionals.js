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

let fuelLevel = "100%";

let weatherStatus = "clear";

let preparedForLiftOff = true;


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <= 7) {

} else {
    astronautCount = '';
}

// add logic below to verify all astronauts are ready

if (astronautStatus === "ready") {
    
} else {
    astronautStatus = '';
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg <= maximumMassLimit) {

} else totalMassKg = '';

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius <= maximumFuelTemp && fuelTempCelsius >= minimumFuelTemp) {

} else fuelTempCelsius = '';

// add logic below to verify the fuel level is at 100%

if (fuelLevel === "100%") {
     
} else fuelLevel = '';

// add logic below to verify the weather status is clear

if (weatherStatus === "clear") {
    
} else {
    weatherStatus = '';
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
    console.log("Something is amiss");
 }