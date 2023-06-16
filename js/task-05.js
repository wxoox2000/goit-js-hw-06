const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
function inputEvent (evt) {
    if(evt.currentTarget.value === ''){
        output.textContent = "Anonymous";
    }
    else {
        output.textContent = evt.currentTarget.value;
    }
}
input.addEventListener('input', inputEvent)