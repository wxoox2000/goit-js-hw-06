const input = document.querySelector('#validation-input');
const validLength = Number(input.dataset.length);
function inputValidation(evt) {
    let inputLength = evt.currentTarget.value;
    console.log(inputLength.length);
    if(inputLength.length === validLength){
        if(input.classList.contains('invalid')){
            input.classList.remove('invalid');
            input.classList.add('valid')
        }
        else {
            input.classList.add('valid')
        }
    }
    else {
        input.classList.add('invalid')
    }}
input.addEventListener('blur', inputValidation);