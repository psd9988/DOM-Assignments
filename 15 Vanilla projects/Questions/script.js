let myBtn1 = document.querySelector('.myBtn1');
let myBtn2 = document.querySelector('.myBtn2');
let myBtn3 = document.querySelector('.myBtn3');
let answer1 = document.querySelector('.answer1');
let answer2 = document.querySelector('.answer2');
let answer3 = document.querySelector('.answer3');
let question1 = document.querySelector('.question1');
let question2 = document.querySelector('.question2');
let question3 = document.querySelector('.question3');


myBtn1.addEventListener('click', () => {
    answer1.classList.toggle('displayNone');
    question1.classList.toggle('borderNone');
    question2.classList.remove('borderNone');
    question3.classList.remove('borderNone');
    if (myBtn1.classList.contains('fa-square-plus')) {
        myBtn1.classList.replace('fa-square-plus', 'fa-square-minus');
        myBtn2.classList.replace('fa-square-minus', 'fa-square-plus');
        myBtn3.classList.replace('fa-square-minus', 'fa-square-plus');
        answer2.classList.add('displayNone');
        answer3.classList.add('displayNone');
    } else {
        myBtn1.classList.replace('fa-square-minus', 'fa-square-plus');
    }

})
myBtn2.addEventListener('click', () => {
    answer2.classList.toggle('displayNone');
    question2.classList.toggle('borderNone');
    question1.classList.remove('borderNone');
    question3.classList.remove('borderNone');
    if (myBtn2.classList.contains('fa-square-plus')) {
        myBtn2.classList.replace('fa-square-plus', 'fa-square-minus');
        myBtn1.classList.replace('fa-square-minus', 'fa-square-plus');
        myBtn3.classList.replace('fa-square-minus', 'fa-square-plus');
        answer1.classList.add('displayNone');
        answer3.classList.add('displayNone');
    } else {
        myBtn2.classList.replace('fa-square-minus', 'fa-square-plus');
    }
})
myBtn3.addEventListener('click', () => {
    answer3.classList.toggle('displayNone');
    question3.classList.toggle('borderNone');
    question1.classList.remove('borderNone');
    question2.classList.remove('borderNone');
    if (myBtn3.classList.contains('fa-square-plus')) {
        myBtn3.classList.replace('fa-square-plus', 'fa-square-minus');
        myBtn2.classList.replace('fa-square-minus', 'fa-square-plus');
        myBtn1.classList.replace('fa-square-minus', 'fa-square-plus');
        answer2.classList.add('displayNone');
        answer1.classList.add('displayNone');
    } else {
        myBtn3.classList.replace('fa-square-minus', 'fa-square-plus');
    }
})