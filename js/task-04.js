const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');
let counterValue = 0;
decrement.addEventListener('click', () => {
    counterValue -=1;
    value.textContent = counterValue;
});
increment.addEventListener('click', () => {
    counterValue +=1;
    value.textContent = counterValue;
});