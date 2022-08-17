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
<input onchange="getVal()" type="text" class="taskInput" placeholder="Enter task">
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

let toDoText = document.createElement('div');
toDoText.classList.add('doneContainer');

function getVal() {
    const val = document.querySelector('input').value;
    toDoText.innerText = val;
}

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
    let crossIcon = document.querySelector('.fa-xmark');
    crossIcon.addEventListener('click', () => {
        document.body.classList.remove('blurItems');
        document.querySelector('.another').remove();
    })

    let doneButton = document.querySelector('.doneButton');

    doneButton.disabled = true;

    let buttons2 = document.getElementsByClassName('color');
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
    // DONE BUTTON EVENT LISTENER
    doneButton.addEventListener('click', () => {

        if (toDoText.innerText.length > 0) {

            // REMOVE BLUR BACKGROUND AND POP UP WINDOW
            document.body.classList.remove('blurItems');
            document.querySelector('.another').remove();

            // TO DO LIST CONTAINER
            let toDoContainer = document.createElement('div');
            toDoContainer.classList.add('toDoContainer');
            document.body.appendChild(toDoContainer);

            // COLOR STRIP
            let colorStrip = document.createElement('div');
            colorStrip.classList.add('colorStrip');
            colorStrip.style.backgroundColor = doneButton.style.backgroundColor;
            toDoContainer.appendChild(colorStrip);

            // TODO item
            let toDoitem = document.createElement('div');
            toDoitem.classList.add('toDoitem');
            toDoitem.innerText = toDoText.innerText;
            toDoContainer.appendChild(toDoitem);

            // CHECK ICON
            let checkIcon = document.createElement('i');
            checkIcon.classList.add('checkIcon', 'fa-solid', 'fa-check', 'displayNone');
            toDoContainer.appendChild(checkIcon);

            checkIcon.addEventListener('click', () => {
                toDoContainer.classList.add('displayNone');
                toDoContainer.classList.add('checkedItems');
            })

            let checkedItemsList = document.querySelector('.item6');
            checkedItemsList.addEventListener('click', () => {
                if (toDoContainer.classList.contains('checkedItems')) {
                    toDoContainer.classList.remove('displayNone');
                } else {
                    toDoContainer.classList.add('displayNone');
                }

            }
            )

            // TRASH ICON
            let trashIcon = document.createElement('i');
            trashIcon.classList.add('fa-solid', 'fa-trash-can', 'displayNone');
            toDoContainer.appendChild(trashIcon);

            trashIcon.addEventListener('click', () => {
                toDoContainer.remove();
            })

            // PENCIL ICON
            let pencilIcon = document.createElement('i');
            pencilIcon.classList.add('fa-solid', 'fa-pencil', 'displayNone');
            toDoContainer.appendChild(pencilIcon);

            pencilIcon.addEventListener('click', () => {
                toDoitem.classList.toggle('edit');
                if (toDoitem.classList.contains('edit')) {
                    toDoitem.contentEditable = true;
                    toDoitem.focus();
                    pencilIcon.style.color = '#fff';
                } else {
                    toDoitem.contentEditable = false;
                    pencilIcon.style.color = 'blueviolet';
                }
            })

            //   SQUARE ICON FOR CHANGING COLOR STRIPS
            let squareIcon = document.createElement('i');
            squareIcon.classList.add('fa-solid', 'fa-square', 'displayNone');
            toDoContainer.appendChild(squareIcon);

            squareIcon.addEventListener('click', () => {
                let myColors = ['red', 'yellow', 'blue', 'black'];
                if (colorStrip.style.backgroundColor == myColors[myColors.length - 1]) {
                    colorStrip.style.backgroundColor = myColors[0];
                } else {
                    colorStrip.style.backgroundColor = myColors[myColors.indexOf(colorStrip.style.backgroundColor) + 1];
                }
            })

            // UNLOCK ICON

            let unlockIcon = document.createElement('i');
            unlockIcon.classList.add("fa-solid", "fa-lock-open");

            // LOCK ICON
            let lockIcon = document.createElement('i');
            lockIcon.classList.add('fa-solid', 'fa-lock');
            toDoContainer.appendChild(lockIcon);

            lockIcon.addEventListener('click', () => {
                lockIcon.replaceWith(unlockIcon);
                checkIcon.classList.remove('displayNone');
                trashIcon.classList.remove('displayNone');
                squareIcon.classList.remove('displayNone');
                pencilIcon.classList.remove('displayNone');

            })

            unlockIcon.addEventListener('click', () => {
                unlockIcon.replaceWith(lockIcon);
                checkIcon.classList.add('displayNone');
                trashIcon.classList.add('displayNone');
                squareIcon.classList.add('displayNone');
                pencilIcon.classList.add('displayNone');

            })

            allButton.addEventListener('click', () => {
                if (toDoContainer.classList.contains('checkedItems')) {
                    toDoContainer.classList.add('displayNone');
                }
                else {
                    toDoContainer.classList.remove('displayNone');
                }
            })
            item2.addEventListener('click', () => {
                if (toDoContainer.classList.contains('checkedItems')) {
                    toDoContainer.classList.add('displayNone');
                }
                else if (colorStrip.style.backgroundColor != 'rgb(255, 0, 0)') {
                    toDoContainer.classList.add('displayNone');
                } else {
                    toDoContainer.classList.remove('displayNone');
                }
            })
            item3.addEventListener('click', () => {
                if (toDoContainer.classList.contains('checkedItems')) {
                    toDoContainer.classList.add('displayNone');
                }
                else if (colorStrip.style.backgroundColor != 'rgb(255, 255, 0)') {
                    toDoContainer.classList.add('displayNone');
                } else {
                    toDoContainer.classList.remove('displayNone');
                }
            })
            item4.addEventListener('click', () => {
                if (toDoContainer.classList.contains('checkedItems')) {
                    toDoContainer.classList.add('displayNone');
                }
                else if (colorStrip.style.backgroundColor != 'rgb(0, 0, 255)') {
                    toDoContainer.classList.add('displayNone');
                } else {
                    toDoContainer.classList.remove('displayNone');
                }
            })
            item5.addEventListener('click', () => {
                if (toDoContainer.classList.contains('checkedItems')) {
                    toDoContainer.classList.add('displayNone');
                }
                else if (colorStrip.style.backgroundColor != 'rgb(0, 0, 0)') {
                    toDoContainer.classList.add('displayNone');
                } else {
                    toDoContainer.classList.remove('displayNone');
                }
            })
        }
    })
})








