const audioElements = document.querySelectorAll('.audio');
const logo = document.getElementById('mainLogo');
const overlay = document.getElementById('overlay');
const logoAudio = document.getElementById('logoAudio');

let currentPlaying = Array(audioElements.length).fill(false);

function toggleSound(index) {
  const audio = audioElements[index];

  if (currentPlaying[index]) {
    audio.pause();
    audio.currentTime = 0;
    currentPlaying[index] = false;
  } else {
    audio.play();
    currentPlaying[index] = true;
  }
}

// Логотип → показывает фото + музыка
logo.addEventListener('click', () => {
  overlay.style.display = 'flex';
  logoAudio.currentTime = 0;
  logoAudio.play();

  setTimeout(() => {
    overlay.style.display = 'none';
    logoAudio.pause();
    logoAudio.currentTime = 0;
  }, 10000); // 10 секунд
});
