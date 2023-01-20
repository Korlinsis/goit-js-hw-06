const inputEl = document.querySelector('input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const collection = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let string = '';
  
if (amount <= 0 || amount > 100) {
  return alert("Введіть число від 1 до 100!");
} else {
  for (let i = 1; i <= amount; i += 1) {
  string += `<div style="
  background-color:${getRandomHexColor()}; 
  width:${30 + (i - 1) * 10}px; 
  height:${30 + (i - 1) * 10}px;
  "></div>`;
  }
};
  collection.innerHTML = string;
}

function destroyBoxes() {
  inputEl.value = '';
  collection.innerHTML = '';
}

createButton.addEventListener('click', () => {
  createBoxes(Number(inputEl.value))
});

destroyButton.addEventListener('click', destroyBoxes);