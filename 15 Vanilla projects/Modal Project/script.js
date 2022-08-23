let modalbtn = document.querySelector('.modalbtn');
let modalContent = document.createElement('div');
modalContent.classList.add('modalContent');
modalContent.textContent = 'Modal Content';
let crossIcon = document.createElement('i');
crossIcon.classList.add("fa-solid", "fa-xmark")
modalContent.append(crossIcon);
let myColorDim = document.createElement('div');
myColorDim.classList.add('myColorDim');



modalbtn.addEventListener('click', ()=>{
    document.body.append(myColorDim)
    document.body.insertAdjacentElement("afterbegin",modalContent)
})

crossIcon.addEventListener('click', ()=>{
    document.body.removeChild(myColorDim)
    document.body.removeChild(modalContent)
})