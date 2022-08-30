let history = document.querySelector('.history');
let vision = document.querySelector('.vision'); 
let goals = document.querySelector('.goals');

let paraHistory = document.querySelector('.paraHistory');
let paraVision = document.querySelector('.paraVision');
let paraGoals = document.querySelector('.paraGoals');

paraVision.classList.add('displayNone'); 
paraGoals.classList.add('displayNone');

history.addEventListener('click', ()=>{
    paraVision.classList.add('displayNone'); 
    paraGoals.classList.add('displayNone');
    paraHistory.classList.remove('displayNone');
    history.classList.remove('greyBackground');
    history.classList.add('whiteBackground');
    vision.classList.add('greyBackground'); 
    goals.classList.add('greyBackground');
    vision.classList.remove('whiteBackground'); 
    goals.classList.remove('whiteBackground');
})

vision.addEventListener('click', ()=>{
    paraVision.classList.remove('displayNone'); 
    paraGoals.classList.add('displayNone');
    paraHistory.classList.add('displayNone');
    vision.classList.remove('greyBackground');
    vision.classList.add('whiteBackground');
    history.classList.add('greyBackground'); 
    goals.classList.add('greyBackground');
    history.classList.remove('whiteBackground'); 
    goals.classList.remove('whiteBackground');
})

goals.addEventListener('click', ()=>{
    paraGoals.classList.remove('displayNone'); 
    paraVision.classList.add('displayNone');
    paraHistory.classList.add('displayNone');
    goals.classList.remove('greyBackground');
    goals.classList.add('whiteBackground');
    vision.classList.add('greyBackground'); 
    history.classList.add('greyBackground');
    vision.classList.remove('whiteBackground'); 
    history.classList.remove('whiteBackground');
})