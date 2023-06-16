const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')
const listElements = [];
for(let i = 0; i < ingredients.length; i +=1){
  let li = document.createElement('li');
  li.textContent = ingredients[i];
  li.classList.add('item')
  listElements.push(li);
}

list.append(...listElements)
