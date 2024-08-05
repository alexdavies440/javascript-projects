function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.

    // let liftoff = function() {
    //     document.getElementById("statusReport").innerHTML = "Houston, we have liftoff!";
    //     console.log('Houston, we have liftoff!');
    // }

    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
     });
     missionAbort.addEventListener("mouseover", function() {
         missionAbort.style.backgroundColor = "red";
         missionAbort.style.color = "darkred"
     });
     missionAbort.addEventListener("mouseout", function() {
        missionAbort.style.backgroundColor = "";
        missionAbort.style.color = "";
     });
     missionAbort.addEventListener("click", function() {
        if (window.confirm("Are you sure you want to abort the mission?") === true) {
            window.alert("Mission aborted! Space shuttle returning home");
        }
     });
} 


window.addEventListener("load", init);
