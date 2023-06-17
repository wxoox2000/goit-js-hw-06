const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = `${range.value}px`;
range.addEventListener('input', fontSizeChange)
function fontSizeChange(evt) {
    text.style.fontSize = `${evt.currentTarget.value}px`;
}