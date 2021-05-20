const crashAudio = new Audio("sounds/crash.mp3");
const kickBassAudio = new Audio("sounds/kick-bass.mp3");
const snareAudio = new Audio("sounds/snare.mp3");
const firstTomAudio = new Audio("sounds/tom-1.mp3");
const secondTomAudio = new Audio("sounds/tom-2.mp3");
const thirdTomAudio = new Audio("sounds/tom-3.mp3");
const fourthTomAudio = new Audio("sounds/tom-4.mp3");

var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    pressKey(this.innerHTML);
  });
}

document.addEventListener("keydown", function (keyPressEvent) {
  makeSound(keyPressEvent.key);
  pressKey(keyPressEvent.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      firstTomAudio.play();
      break;
    case "a":
      secondTomAudio.play();
      break;
    case "s":
      thirdTomAudio.play();
      break;
    case "d":
      fourthTomAudio.play();
      break;
    case "j":
      crashAudio.play();
      break;
    case "k":
      kickBassAudio.play();
      break;
    case "l":
      snareAudio.play();
      break;
  }
}

function pressKey(keyPressed)
{
  var activeButton = document.querySelector("." + keyPressed);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
