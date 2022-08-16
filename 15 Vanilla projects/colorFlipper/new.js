let clickButton = document.querySelector('.clickMe');
let whichColor = document.querySelector('.whichColor');
let simpleBtn = document.querySelector('.simple');
let hexBtn = document.querySelector('.hex');

let colors = ['red', 'blue', 'green', 'yellow'];
let hexColors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function simpleColorLoop() {
    return Math.floor(Math.random() * colors.length);
}

function hexColorLoop() {
    return Math.floor(Math.random() * hexColors.length);
}

simpleBtn.addEventListener('click', () => {
    hexBtn.classList.remove('selected');
    simpleBtn.classList.toggle('selected');
})

hexBtn.addEventListener('click', () => {
    simpleBtn.classList.remove('selected');
    hexBtn.classList.toggle('selected');
})

clickButton.addEventListener('click', function () {
    if (simpleBtn.classList.contains('selected')) {
        let color = colors[simpleColorLoop()];
        document.body.style.backgroundColor = color;
        whichColor.innerHTML = color;
        whichColor.style.color = 'blue';

        clickButton.addEventListener('mouseover', function () {
            clickButton.style.backgroundColor = 'black';
            clickButton.style.color = 'white';
        }
        );

        clickButton.addEventListener('mouseout', function () {
            clickButton.style.backgroundColor = 'tomato';
            clickButton.style.color = 'black';
        }
        );
    }
    else if (hexBtn.classList.contains('selected')) {
        let color = hexColors[hexColorLoop()] + hexColors[hexColorLoop()] + hexColors[hexColorLoop()] + hexColors[hexColorLoop()] + hexColors[hexColorLoop()] + hexColors[hexColorLoop()];
        document.body.style.backgroundColor = '#' + color;
        whichColor.innerHTML = '#' + color;
        whichColor.style.color = 'blue';

        clickButton.addEventListener('mouseover', function () {
            clickButton.style.backgroundColor = 'black';
            clickButton.style.color = 'white';
        }
        );

        clickButton.addEventListener('mouseout', function () {
            clickButton.style.backgroundColor = 'tomato';
            clickButton.style.color = 'black';
        }
        );
    }
});


