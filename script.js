document.addEventListener('DOMContentLoaded', function() {

const box = document.getElementById('box');
const increaseButton = document.getElementById('add');
const decreaseButton = document.getElementById('les');
const resetButton = document.getElementById('reset');
const rotateLeft = document.getElementById('rot_left');
const rotateRight = document.getElementById('rot_rig');
const rotateLeft180 = document.getElementById('rot_left_180');
const rotateRight180 = document.getElementById('rot_rig_180');
const change = document.getElementById('change');
const playSound = document.getElementById('play');
const stopSound = document.getElementById('stop');
const audio = document.getElementById("myAudio");
const soundPlus = document.getElementById('soundPlus')
const soundMinus = document.getElementById('soundMinus')

const initialWidth = 100;
const initialHeight = 100;
const step = 50;
const volumeStepStandart = 1; // 100%
const volumeStep = 0.1; //10%

increaseButton.addEventListener('click', function() {
  box.style.width = `${box.offsetWidth + step}px`;
  box.style.height = `${box.offsetHeight + step}px`;
});

decreaseButton.addEventListener('click', function() {
  box.style.width = `${box.offsetWidth - step}px`;
  box.style.height = `${box.offsetHeight - step}px`;
});

resetButton.addEventListener('click', function() {
  box.style.width = `${initialWidth}px`;
  box.style.height = `${initialHeight}px`;
  box.style.transform = 'rotate(0deg)'
  box.src = "./img/defaultStar.webp"
  audio.volume = `${volumeStepStandart}`
  console.log("Volume:", audio.volume)
});

rotateLeft.addEventListener('click', function(){
  box.style.transform += 'rotate(90deg)'
});

rotateRight.addEventListener('click', function(){
  box.style.transform += 'rotate(-90deg)'
});

rotateLeft180.addEventListener('click', function(){
  box.style.transform += 'rotate(180deg)'
});

rotateRight180.addEventListener('click', function(){
  box.style.transform += 'rotate(-180deg)'
});

change.addEventListener('click', function() {
  console.log(box.src);
  const currentSrc = box.src;

  if (currentSrc.includes("defaultStar.webp")) {
    box.src = './img/redStar.webp';
  } else {
    console.log('123');
    box.src = "./img/defaultStar.webp";
  }
});
playSound.addEventListener('click', function(){
  audio.play();
});
stopSound.addEventListener('click', function(){
  audio.pause();
});
soundPlus.addEventListener('click', function(){
  if (audio.volume < 1) {
          audio.volume += volumeStep;
          audio.volume = Math.min(1, audio.volume); // Ограничиваем максимальную громкость 1
          console.log("Volume:", audio.volume);
        }
});
soundMinus.addEventListener('click', function() {
  if (audio.volume > 0) {
    audio.volume -= volumeStep;
    audio.volume = Math.max(0, audio.volume); // Ограничиваем минимальную громкость 0
    console.log("Volume:", audio.volume);
  }
});
});
