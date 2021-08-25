var music = document.querySelectorAll(".music").length;

for (var i = 0; i < music; i++) {
  document.querySelectorAll(".music")[i].addEventListener("click", function () {
    var buttonClasses = this.innerHTML;
    makeSound(buttonClasses);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});
let played;
let audio = new Audio();

function makeSound(key) {
  if (audio) {
    audio.pause();
  }
  switch (key) {
    case "M":
      audio.src = "songs/dilBechara.mp3";
      break;

    case "U":
      audio.src = "songs/oBarish.mp3";
      break;

    case "S":
      audio.src = "songs/smackThat.mp3";
      break;

    case "I":
      audio.src = "songs/sunSathiya.mp3";
      break;

    case "C":
      audio.src = "songs/teraRasta.mp3";
      break;

    case "J":
      audio.src = "songs/tumSehi.mp3";
      break;
  }

  audio.play();
}
