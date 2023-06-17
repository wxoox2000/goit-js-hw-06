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
  const getColor = getRandomHexColor();
  body.style.backgroundColor = getColor;
  colorValue.textContent = getColor;
}