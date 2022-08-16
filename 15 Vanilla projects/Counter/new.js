let decrease = document.querySelector('.decrease');
let increase = document.querySelector('.increase');
let reset = document.querySelector('.reset');
let digits = document.querySelector('.digits');

decrease.addEventListener('click', () => {
    digits.innerText = digits.innerText - 1;

    if (digits.innerText >= 1) {
        digits.style.color = 'green';
    } else if (digits.innerText <= -1) {
        digits.style.color = 'red';
    } else {
        digits.style.color = 'black';
    }

})

increase.addEventListener('click', () => {

    (digits.innerText) = parseInt(digits.innerText) + 1;

    if (digits.innerText >= 1) {
        digits.style.color = 'green';
    } else if (digits.innerText <= -1) {
        digits.style.color = 'red';
    } else {
        digits.style.color = 'black';
    }
})

reset.addEventListener('click', () => {
    digits.innerText = 0;
    digits.style.color = 'black';
})

