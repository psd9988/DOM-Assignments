let allBtn = document.querySelector('.allBtn');
let menuButtons = document.getElementsByClassName('menuButtons');
let allItems = document.getElementsByClassName('fullBox');
let breakfast = document.querySelector('.breakfast');
let lunch = document.querySelector('.lunch');
let soups = document.querySelector('.soups');
let dinner = document.querySelector('.dinner');


let clicked = menuButtons[0];
for (let i = 0; i < menuButtons.length; i++) {
    for (let j = 0; j < menuButtons.length; j++) {
        if (menuButtons[j].classList.contains('borderBlack')) {
            clicked = menuButtons[j];
        }
    }
    menuButtons[i].addEventListener('click', () => {
        clicked.classList.remove('borderBlack');
        menuButtons[i].classList.add('borderBlack');
        clicked = menuButtons[i];

    })

}


allBtn.addEventListener('click', ()=>{
    for(let i = 0; i<allItems.length; i++){
        if(allItems[i].classList.contains('displayNone')){
            allItems[i].classList.remove('displayNone')   
        }
    }
})

breakfast.addEventListener('click', ()=>{
    for(let i = 0; i<allItems.length; i++){
        if(!allItems[i].classList.contains('displayNone')){
            allItems[i].classList.add('displayNone')   
        }
    }
    allItems[2].classList.remove('displayNone');   
    allItems[1].classList.remove('displayNone');   
    allItems[0].classList.remove('displayNone');   
})

lunch.addEventListener('click', ()=>{
    for(let i = 0; i<allItems.length; i++){
        if(!allItems[i].classList.contains('displayNone')){
            allItems[i].classList.add('displayNone')   
        }
    }
    allItems[3].classList.remove('displayNone');   
    allItems[5].classList.remove('displayNone');   
})

soups.addEventListener('click', ()=>{
    for(let i = 0; i<allItems.length; i++){
        if(!allItems[i].classList.contains('displayNone')){
            allItems[i].classList.add('displayNone')   
        }
    }
    allItems[7].classList.remove('displayNone');   
    allItems[9].classList.remove('displayNone');   
     
})

dinner.addEventListener('click', ()=>{
    for(let i = 0; i<allItems.length; i++){
        if(!allItems[i].classList.contains('displayNone')){
            allItems[i].classList.add('displayNone')   
        }
    }
    allItems[4].classList.remove('displayNone');   
    allItems[6].classList.remove('displayNone');   
    allItems[8].classList.remove('displayNone');   
     
})