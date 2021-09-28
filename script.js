const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let position = 0;

function handleKeyUp(event) {
  if (event.keyCode == 32) {
    jump();
  }
}

function jump() {
  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
        } else {
          position -= 20;
          dino.style.bottom = `${position}px`;
        }
      }, 30);
    } else {
      position += 20;
      dino.style.bottom = `${position}px`;
    }
  }, 20);
}

function createCactus() {
  const cactus = document.createElement('div');
  let cactusPosition = 1000;
  let randomCactus = Math.random() * 6000;

  cactus.classList.add('cactus');
  cactus.style.left = `1000px`;
  background.appendChild(cactus);

  let leftInterval = setInterval(() => {
    if (cactusPosition < -60) {
      clearInterval(leftInterval);
      background.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      // game over;
      clearInterval(leftInterval);
      document.body.innerHTML = '<h1 class="gameover">Game Over!</h1>';
      document.body.style.backgroundColor = '#121212';
    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + 'px';
    }
  }, 20);

  setTimeout(createCactus, randomCactus);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);
