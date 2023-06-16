const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

range.addEventListener('change', fontSizeChange)
function fontSizeChange(evt) {
    text.style.fontSize = `${evt.currentTarget.value}px`;
}