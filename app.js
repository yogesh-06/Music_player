var music = document.querySelectorAll(".music").length;

for (var i=0; i< music; i++){
    
  document.querySelectorAll(".music")[i].addEventListener('click', function(){
       var buttonClasses = this.innerHTML;
       makeSound(buttonClasses);
    });
}
 
document.addEventListener("keypress", function(event){ 
  makeSound(event.key); 
});
let played;
let audio;

function makeSound(key){ 
  switch(key){

    case "M":
   audio =  new Audio("songs/dilBechara.mp3");
   audio.play();
      break;
      

      case "U" :
      audio = new Audio("songs/oBarish.mp3");
      audio.play();
      break;

      case "S" :
      audio = new Audio("songs/smackThat.mp3");
      audio.play();
      break;

      case "I" :
      audio = new Audio("songs/sunSathiya.mp3");
      audio.play();
      break;

      case "C" :
      audio = new Audio("songs/teraRasta.mp3");
      audio.play();
      break;

      case "J" :
      audio = new Audio("songs/tumSehi.mp3");
      audio.play();
      break;
    } 
  }

