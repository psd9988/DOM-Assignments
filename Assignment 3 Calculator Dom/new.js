let screen = document.getElementById('screen')
let buttonsList = document.querySelectorAll('.btn')


for (let i = 0; i < buttonsList.length; i++) {
    buttonsList[i].addEventListener('click', () => {
        if (buttonsList[i].innerText == 'x') {
            screen.value += '*'
        } else if (buttonsList[i].innerText == '÷') {
            screen.value += '/'
        } else {
            screen.value += buttonsList[i].innerText
        }
    })
}

let CEButton = document.getElementById('CEButton')

CEButton.addEventListener('click', () => {
    if (screen.value) {
        screen.value = screen.value.slice(0, screen.value.length - 1);
    }
})

let facto = document.getElementById('fact')

facto.addEventListener('click', () => {
    let i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
})

let myAc = document.getElementById('acID')

myAc.addEventListener('click', () => {
    screen.value = ''
})

let newSin = document.getElementById('mySin')

newSin.addEventListener('click', () => {
    screen.value = Math.sin(screen.value);
})

let newCos = document.getElementById('myCos')

newCos.addEventListener('click', () => {
    screen.value = Math.cos(screen.value);
})

let newTan = document.getElementById('myTan')

newTan.addEventListener('click', () => {
    screen.value = Math.tan(screen.value);
})

let newPow = document.getElementById('myPow')

newPow.addEventListener('click', () => {
    screen.value = Math.pow(screen.value, 2);
})

let newSqrt = document.getElementById('sqrt')

newSqrt.addEventListener('click', () => {
    screen.value = Math.sqrt(screen.value, 2);
})

let newLog = document.getElementById('myLog')

newLog.addEventListener('click', () => {
    screen.value = Math.log(screen.value);
})

let newPi = document.getElementById('myPi')

newPi.addEventListener('click', () => {
    screen.value = 3.14159265359;
})

let newRad = document.getElementById('myRad')

newRad.addEventListener('click', () => {
    screen.value = 57.2958;
})

let newEquals = document.getElementById('myEquals')

newEquals.addEventListener('click', () => {
    screen.value = eval(screen.value)
})

let newPercent = document.getElementById('percent')

newPercent.addEventListener('click', () => {
    Array.from(screen.value)
    screen.value = (screen.value.split('*')[0]) * (screen.value.split('*')[1]) / 100;
})








