for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var use = this.innerHTML;
    makeSound(use);
    buttonAnimation(use);
  });
}
document.addEventListener("keypress", function (event) {
  var know = event.key;
  makeSound(know);
  buttonAnimation(know);
});

function makeSound(use) {
  if (use == "w") {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (use == "a") {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (use == "l") {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  } else if (use == "s") {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (use == "d") {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  } else if (use == "j") {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  } else if (use == "k") {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  }
}
function buttonAnimation(use) {
  var activeButton = document.querySelector("." + use);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 1000); 
}
