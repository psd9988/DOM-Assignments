let container1 = document.querySelector('.container1')
let container2 = document.querySelector('.container2')
let container3 = document.querySelector('.container3')
let addButton = document.querySelector('.addButton')
let inputText = document.querySelector('#addItem')


let count = 0;
// Add button Event listener starts below____________________________________________________
addButton.addEventListener('click', () => {
    if (inputText.value.length > 0) {
        count++
        let myLabel = document.createElement('label')
        let checkliItem = document.createElement('input')
        checkliItem.classList.add('checkliItem')
        let mydiv = document.createElement('div')

        // We have created some icons below:____________________________________

        let editIcon = document.createElement('i')
        editIcon.classList.add('fa-solid', 'fa-pencil')
        editIcon.style.color = 'brown'

        let deleteIcon = document.createElement('i')
        deleteIcon.classList.add('fa-solid', 'fa-trash-can')
        deleteIcon.style.color = 'red';

        let checkIcon = document.createElement('i')
        checkIcon.classList.add('fa-solid', 'fa-check')
        checkIcon.style.color = 'green'
        // __________________________________________________________________

        checkliItem.id = (`item${count}`)
        // myLabel.htmlFor = (`item${count}`)
        myLabel.innerText = inputText.value
        myLabel.classList.add('myLabel')
        checkliItem.type = 'checkbox'
        mydiv.append(checkliItem)
        mydiv.append(myLabel)
        mydiv.append(editIcon)
        mydiv.append(deleteIcon)
        mydiv.classList.add('myDiv')
        container2.append(mydiv)
        let striked = document.createElement('del')
        striked.classList.add('striked')
        let myText;


        checkliItem.addEventListener('click', (e) => {
            if (e.target.checked == true) {
                striked.innerText = myLabel.innerText;
                myLabel.replaceWith(striked);
                myText = striked.innerText;
                e.path[1].remove();
                container3.append(e.path[1])
            } else {

                myLabel = document.createElement('label');
                myLabel.classList.add('myLabel');
                myLabel.innerText = myText;
                striked.replaceWith(myLabel);
                e.path[1].remove();
                container2.append(e.path[1])


            }
        })

        editIcon.addEventListener('click', () => {
            myLabel.contentEditable = true;
            myLabel.style.border = 'red 2px solid'
            myLabel.style.borderRadius = '5px'
            myLabel.style.width = '1fr';
            myLabel.style.cursor = 'text';
            editIcon.replaceWith(checkIcon)

        })

        checkIcon.addEventListener('click', () => {
            myLabel.style.border = 'none'
            checkIcon.replaceWith(editIcon)
            myLabel.contentEditable = false;

        })

        deleteIcon.addEventListener('click', (e) => {
            // let deleteElement = document.querySelector(e).parentElement.nodeName;
            e.path[1].remove();
        })

    }

}) //addButton EVent listerner ends here_________________________________
