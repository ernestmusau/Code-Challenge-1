let prompt = require("prompt-sync")({ sigint: true });

let speed = prompt("Enter speed of car: ");
speed = parseInt(speed);

function calculateDemeritPoints(speed) {
    let speedLimit = 70;
    let kmPerDemeritPoint = 5;
    let pointsPerKmOver = 2;
    let demeritPoints = 0; 
    let maxDemeritPoints = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else if (speed > speedLimit) {
        demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

        // Checking if demerit points exceed the suspension limit
        if (demeritPoints >= maxDemeritPoints) {
            console.log("License suspended");
        } else {
            console.log(`Demerit points: ${demeritPoints}`); 
        }
    }
}

calculateDemeritPoints(speed);
