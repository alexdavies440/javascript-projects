// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    let takeoff = this.document.getElementById("takeoff");
    let flightStatus = this.document.getElementById("flightStatus");
    let shuttleBackground = this.document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let landButton = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let rocket = document.getElementById("rocket");

    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let right = document.getElementById("right");
    let left = document.getElementById("left");

    takeoff.addEventListener("click", function() {

        let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff");
        
        if (confirmation) {
            console.log("this worked");
            flightStatus.innerHTML= "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = "10000";
        }
    });

    landButton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
    });

    missionAbort.addEventListener("click", function() {
       
        let confirmation = window.confirm("Confirm that you want to abort the mission.");

        if (confirmation) {
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = "0";
        };
    });

    up.addEventListener("click", function() {
        rocket.style.paddingBottom = "10px"
    });

    down.addEventListener("click", function() {
        rocket.style.paddingTop = "10px";
    });

    right.addEventListener("click", function() {
        rocket.style.paddingLeft = "10px";
    });

    left.addEventListener("click", function() {
        rocket.style.paddingRight = "10px";
    });
    



})