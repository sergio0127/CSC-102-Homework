// code.js

// Function to implement the game
function playGame() {
    // Generate two random numbers between 1 and 6
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;

    // Calculate the sum of the two dice
    var sum = die1 + die2;

    // Check the game rules
    if (sum === 7 || sum === 11) {
        document.getElementById("output").innerHTML = "CRAPS - You lose!";
    } else if (die1 === die2 && die1 % 2 === 0) {
        document.getElementById("output").innerHTML = "You won!";
    } else {
        document.getElementById("output").innerHTML = "You pushed!";
    }
}
