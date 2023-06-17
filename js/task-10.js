function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
input.addEventListener("change", value);
function value(evt) {
  let inputValue = Number(evt.currentTarget.value);
  createBtn.addEventListener("click", createBoxes(inputValue));
  function createBoxes(amount) {
    if(boxes.children.length){
      boxes.innerHTML = '';
    }
    let markupStyles = [];
    let markup = [];
    let width = 20;
    let heigth = 20;
    for (let i = 1; i <= amount; i += 1) {
      width += 10;
      heigth += 10;
      markupStyles.push(`
    .box${i} {width: ${width}px;
    height: ${heigth}px;
    background-color: ${getRandomHexColor()};
    margin-bottom: 10px;
  }`);
      markup.push(`<div class="box${i}"></div>`);
    }
    console.log(markupStyles);
    console.log(markup);
    boxes.insertAdjacentHTML(
      "beforebegin",
      `<style>${markupStyles.join("")}</style>`
    );
    boxes.insertAdjacentHTML("beforeend", `${markup.join("")}`);
  }
}
destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes(){
  boxes.innerHTML = '';
  input.value = '';
}

