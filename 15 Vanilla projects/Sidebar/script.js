let barsIcon = document.querySelector('.barsIcon');
let sidebar = document.querySelector('.sidebar');
let crossBtn = document.querySelector('.fa-xmark');



barsIcon.addEventListener('click', ()=>{
    sidebar.classList.toggle('showSidebar')
})

crossBtn.addEventListener('click',()=>{
    sidebar.classList.remove('showSidebar')
})