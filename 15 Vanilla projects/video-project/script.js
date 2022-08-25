let myButton = document.querySelector('.myBtn');
let buttonBox = document.querySelector('.btnBox');
let slide = document.querySelector('.slide');
let video = document.querySelector('video')


myButton.addEventListener('click', ()=>{
    buttonBox.classList.toggle('btnBox');
    buttonBox.classList.toggle('slide');
    if(buttonBox.classList.contains('slide')){
        video.pause()
    }else{
        video.play()
    }
})

