// Code your orbitCircumference function here:

function orbitCircumference(altitude) {
  let radiusOfEarthKm = 6378;
  let circumference = Math.PI * (2 * radiusOfEarthKm) + altitude;
  return Math.round(circumference);
}

console.log(orbitCircumference(2000));
// Code your missionDuration function here:

function missionDuration(numOrbits, orbitRadius = 2000, orbitalSpeed = 28000) {
let distance = numOrbits * (orbitCircumference(orbitRadius))
let time = (distance/orbitalSpeed);
time = Math.round(time * 100)/100;
//console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.`);
return time;
}

console.log(missionDuration(1));

// Copy/paste your selectRandomEntry function here:

//let idNumbers = [291, 414, 503, 599, 796, 890]; can't remember if this was here originally or not?

function selectRandomEntry(arrayInput) {
  i =  Math.floor(Math.random()* arrayInput.length);
  return arrayInput[i];
}

// Code your oxygenExpended function here:



function oxygenExpended(candidate) {
  //candidate = selectRandomEntry(crew);
  let oxygenRequired = candidate.o2Used(missionDuration(3));
return console.log(`${candidate["name"]} will perform the spacewalk, which will last ${missionDuration(3)} hours and require ${oxygenRequired} kg of oxygen. `)
}



// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
//console.log(candidateF.o2Used(7))
 console.log(oxygenExpended(candidateF));
 