function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorValue = document.querySelector('.color')

btn.addEventListener('click', changeColor);
function changeColor(){
  body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
}