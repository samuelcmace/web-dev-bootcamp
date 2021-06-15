// Initalize Audio Objects
const blueSound = new Audio("sounds/blue.mp3");
const greenSound = new Audio("sounds/green.mp3");
const redSound = new Audio("sounds/red.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");
const yellowSound = new Audio("sounds/yellow.mp3");

// Create array to reference button colors.
const buttonColors = ["green", "red", "yellow", "blue"];
var level = 1;

// Declare Individual and Pattern Arrays for Both User and Computer Players
var gameChosenColor;
var gameChosenPattern = [];

var userChosenColor;
var userChosenPattern = [];

// Function to check if the two arrays are equal
function checkArrays(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length)
  {
    console.log("Error: The two arrays are not equal.");
    return false;
  }

  for (var i = 0; i < secondArray.length; i++) {
    if (firstArray[i] !== secondArray[i])
      return false;
    else
      return true;
  }
}

// Button Effects Functions
function soundButton(buttonId) {
  switch (buttonId) {
    case "green":
      greenSound.play();
      break;
    case "red":
      redSound.play();
      break;
    case "yellow":
      yellowSound.play();
      break;
    case "blue":
      blueSound.play();
      break;
    default:
      console.log("Error: Unable to play sound file for specified button ID.");
      break;
  }
}

function animateButton(buttonId) {
  $("#" + buttonId).addClass("pressed");
  setTimeout(function() {
    $("#" + buttonId).removeClass("pressed");
  }, 100);
}

function activateButton(buttonId) {
  animateButton(buttonId);
  soundButton(buttonId);
}

function newGame() {
  $("#level-title").text("PRESS ANY KEY TO PLAY");
  $(".btn").off("click");
  $("body").on("keydown", function() {
    nextSequence();
    $(".btn").on("click", function() {
      buttonClick(this.id);
    });
    $("body").off("keydown");
  });
  userChosenPattern = [];
  gameChosenPattern = [];
  level = 1;
}

function gameOver() {
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200);
  $("#level-title").text("GAME OVER");
  wrongSound.play();
  setTimeout(function() {
    newGame();
  }, 1000);
}

// Create new button color and push that to gameChosenPattern array.
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  gameChosenColor = buttonColors[randomNumber];
  activateButton(gameChosenColor);

  gameChosenPattern.push(gameChosenColor);
  console.log("Computer Pattern: " + gameChosenPattern);

  $("#level-title").text("LEVEL " + level);
  level++;
}

// Declare callback function for when a button is clicked.
function buttonClick(buttonId) {
  activateButton(buttonId);
  userChosenPattern.push(buttonId);

  if (userChosenPattern.length === gameChosenPattern.length) {
    console.log("User Pattern: " + userChosenPattern);
    setTimeout(function() {
      nextSequence();
    }, 1000);
    userChosenPattern = [];
    if (!checkArrays(userChosenPattern, gameChosenPattern)) {
      gameOver();
    }
  }
}

newGame();
