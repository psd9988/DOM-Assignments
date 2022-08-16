let taskButton = document.querySelector('.taskButton');
let header = document.querySelector('header');
let buttons1 = document.querySelectorAll('.navItems');
let allButton = document.querySelector('.item1');
let allContainer = document.createElement('div');
let item2 = document.querySelector('.item2');
let item3 = document.querySelector('.item3');
let item4 = document.querySelector('.item4');
let item5 = document.querySelector('.item5');
let item6 = document.querySelector('.item6');



let taskItem = `<div class= "another"> 
<div class= "inputPlusButton">
<div class= "inputContainer">
<input type="text" class="taskInput" placeholder="Enter task"></input>
</div> 
<div class= "buttonContainer">
<button class = "doneButton">Done</button>
</div>
</div>
<i class="fa-solid fa-xmark"></i>
<div class= "colorItemsContainer">
<div class="color1 color"></div>
<div class="color2 color"></div>
<div class="color3 color"></div>
<div class="color4 color"></div>
</div>
</div>
`;

let myToDo = `<div class="toDoContainer">
<div class="colorStrip"></div>
<div class="toDoitem"></div>
<i class="checkIcon fa-solid fa-check"></i>
<i class="fa-solid fa-trash-can"></i>
<i class="fa-solid fa-pencil"></i>
<i class="fa-solid fa-square"></i>
<i class="fa-solid fa-lock"></i>
</div>`


let myClicked = buttons1[0];
for (let i = 0; i < buttons1.length; i++) {
    for (let j = 0; j < buttons1.length; j++) {
        if (buttons1[j].classList.contains('borderWhite')) {
            myClicked = buttons1[j];
        }
    }
    buttons1[i].addEventListener('click', () => {
        myClicked.classList.remove('borderWhite');
        buttons1[i].classList.add('borderWhite');
        myClicked = buttons1[i];
    })
}


taskButton.addEventListener('click', function myFunc() {

    document.body.classList.add('blurItems');
    document.body.insertAdjacentHTML('afterend', taskItem);
    let buttons2 = document.getElementsByClassName('color');

    let crossIcon = document.querySelector('.fa-xmark');
    crossIcon.addEventListener('click', () => {
        document.body.classList.remove('blurItems');
        document.querySelector('.another').remove();
    })

    let doneButton = document.querySelector('.doneButton');

    doneButton.disabled = true;

    let myClicked2 = buttons2[0];

    for (let i = 0; i < buttons2.length; i++) {
        for (let j = 0; j < buttons2.length; j++) {
            if (buttons2[j].classList.contains('borderWhite')) {
                myClicked2 = buttons2[j];

            }
        }
        buttons2[i].addEventListener('click', () => {

            myClicked2.classList.remove('borderWhite');
            buttons2[i].classList.add('borderWhite');
            myClicked2 = buttons2[i];
            doneButton.disabled = false;
            let colorCss = window.getComputedStyle(buttons2[i]).getPropertyValue("background-color");
            doneButton.style.backgroundColor = colorCss;





        })
    }

    let inputText = document.querySelector('.taskInput').value;

    doneButton.addEventListener('click', () => {
        document.body.classList.remove('blurItems');
        document.querySelector('.another').remove();

        if (inputText.length > 0) {
            document.body.innerHTML += allContainer;
            allContainer.insertAdjacentElement('beforeend', myToDo);
            console.log(allContainer);
            document.querySelector('.toDoitem').innerText = inputText;
            document.querySelector('.colorStrip').style.backgroundColor = doneButton.style.backgroundColor;



        }




    })


});










