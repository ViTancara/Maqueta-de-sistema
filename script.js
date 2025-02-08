const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

//let audio1 = new audio1('./audio/sanvalentin1.mp3');

//buttonYes.addEventListener('click', () {
  //   audio1.pause();
//}); 

let messages = [
    `piensalo`,
    `segura..?`,
    `estas segura? `,
    `mira el otro boton`,
    `chuchis..segura?`,
    `pero bb`,
    `muy segura?`
]

buttonNo.addEventListener('click', ()=>{
  fontSize = fontSize + .5
  buttonYes.style.fontSize =`${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent= messages[indexRandom]
})
 //buttonYes.addEventListener('click', ()=>{
  //  audio1.pause();
 //})
buttonYes.addEventListener('click', ()=>{
  document.querySelector(`#message`).style.display = `flex`

  

var duration = 15 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
  
  
}
//buttonYes = sound.pause();//
var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
}, 250);
})