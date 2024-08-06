// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    let takeoff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
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
        rocket.style = "position: absolute; bottom: 0px; left: 210px"
    });

    missionAbort.addEventListener("click", function() {
       
        let confirmation = window.confirm("Confirm that you want to abort the mission.");

        if (confirmation) {
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = "0";
            rocket.style = "position: absolute; bottom: 0px; left: 210px"
        };
    });

    let xAxisPosition= 0;
    let yAxisPosition = 0;
    let height = 0;
    

    up.addEventListener("click", function() {
        if (yAxisPosition < 250000) {
            yAxisPosition += 10;
            height += 10000;
            rocket.style.marginBottom = yAxisPosition + "px";
            shuttleHeight.innerHTML = height;
        }
    });

    down.addEventListener("click", function() {
        if (yAxisPosition > 0) {
            yAxisPosition -= 10;
            height -= 10000;
            rocket.style.marginBottom = yAxisPosition + "px";
            shuttleHeight.innerHTML = height;
        }
    });

    right.addEventListener("click", function() {
        if (xAxisPosition < 240) {
            xAxisPosition += 10;
            rocket.style.marginLeft = xAxisPosition + "px";
        }
    });

    left.addEventListener("click", function() {
        if (xAxisPosition > -230) {
            xAxisPosition -= 10;
            rocket.style.marginLeft = xAxisPosition + "px";
        }
    });
})