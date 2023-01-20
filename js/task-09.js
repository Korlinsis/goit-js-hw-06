function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

buttonEl.addEventListener('click', () => {
  const hexColor = getRandomHexColor();
  body.style.backgroundColor = hexColor;
  textEl.textContent = hexColor;
});