// Link Image HTML Objects
var firstDiceObject = document.querySelectorAll(".dice img")[0];
var secondDiceObject = document.querySelectorAll(".dice img")[1];

// Create array containing dice file paths
var diceFilePaths = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

// Declare dice-rolling functions
function rollFirstDice()
{
  var diceRoll = Math.floor(Math.random() * 6);
  console.log("The first dice roll is a " + (diceRoll + 1));

  return diceRoll;
}

function rollSecondDice()
{
  var diceRoll = Math.floor(Math.random() * 6);
  console.log("The second dice roll is a " + (diceRoll + 1));

  return diceRoll;
}

var firstDiceRoll;
var secondDiceRoll;

// Call the dice-rolling functions and check to see if the values are equal.
// If they are equal, then repeat both functions.
do {
  firstDiceRoll = rollFirstDice();
  secondDiceRoll = rollSecondDice();
  if(firstDiceRoll === secondDiceRoll)
    console.log("Same dice roll: trying again...");

} while (firstDiceRoll === secondDiceRoll);

// Set the image src attributes to the correspondig dice image file path based on the dice roll
firstDiceObject.setAttribute("src", diceFilePaths[firstDiceRoll]);
secondDiceObject.setAttribute("src", diceFilePaths[secondDiceRoll]);

// If the first dice is the winner, set the text to "🚩 First Player Wins!"
// Otherwise, if the second dice is the winner, set the text to "Second Player Wins! 🚩"

if(firstDiceRoll > secondDiceRoll)
{
  document.querySelector("h1").textContent = "🚩 First Player Wins!";
  console.log("🚩 First Player Wins!");
}

else if (secondDiceRoll > firstDiceRoll)
{
  document.querySelector("h1").textContent = "Second Player Wins! 🚩";
  console.log("Second Player Wins! 🚩");
}
