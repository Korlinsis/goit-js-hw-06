const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const target = document.querySelector('#ingredients');

const listOfElements = ingredients.map(ingredient => {
const element = document.createElement('li');
element.classList.add('item');
element.textContent = ingredient;

return element;
});

target.append(...listOfElements);

