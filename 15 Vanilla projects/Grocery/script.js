let alertText = document.querySelector('.alertText');
let mainContainer = document.querySelector('.mainContainer');
let groceryItemsInput = document.querySelector('#groceryItemsInput');
let submit = document.querySelector('.submit');
let clearItemsBtn = document.createElement('div');
clearItemsBtn.innerHTML = `<p class="clearItemsBtn">Clear Items</p>`;


let count = 0;
submit.addEventListener('click', () => {
    if (groceryItemsInput.value.length > 0) {
        let groceryItemsContainer = document.createElement('div');
        groceryItemsContainer.className = ('.groceryItemsContainer');
        groceryItemsContainer.innerHTML += `
    <div class="myToDoItems">
        <p class="item">${groceryItemsInput.value}</p>
    </div>
        <div class="iconsContainer">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-sharp fa-solid fa-trash"></i>
        </div>`;

        mainContainer.appendChild(groceryItemsContainer);
        mainContainer.insertAdjacentElement('beforeend', clearItemsBtn)
        clearItemsBtn.style.display = 'block';
        groceryItemsContainer.style.display = 'flex';
        groceryItemsContainer.style.alignItems = 'center';
        groceryItemsContainer.style.justifyContent = 'space-between';
        groceryItemsContainer.style.padding = '0 8%';
        alertText.innerText = 'Item added successfully';
        alertText.style.color = 'green';
        alertText.style.backgroundColor = 'lightgreen';
        setTimeout(() => {
            alertText.innerText = '';
        }, 1000);

        groceryItemsInput.value = '';
        let editButton = document.querySelector('.fa-pen-to-square');
        let deleteButton = document.querySelector('.fa-trash');
        let item = document.querySelector('.item');
        let myToDoItems = document.querySelector('.myToDoItems');
        let iconsContainer = document.querySelector('.iconsContainer');

        deleteButton.addEventListener('click', ()=>{
            item.remove();
            iconsContainer.remove();
        })


        editButton.addEventListener('click', () => {
            item.classList.toggle('edit');
            if (item.classList.contains('edit')) {
                item.contentEditable = true;
                editButton.style.color = 'black';
                item.focus();
            } else {
                item.contentEditable = false;
                editButton.style.color = 'lightgreen';

            }
        });

        clearItemsBtn.addEventListener('click', () => {
            alertText.innerText = 'Empty List';
            alertText.style.color = 'maroon';
            alertText.style.backgroundColor = 'rgb(229, 188, 188)';
            setTimeout(() => {
                alertText.innerText = '';
            }, 1000);
            groceryItemsContainer.innerHTML = '';
            clearItemsBtn.style.display = 'none';
        })

    } else {
        alertText.innerText = 'Enter your grocery items';
        alertText.style.color = 'maroon';
        alertText.style.backgroundColor = 'rgb(229, 188, 188)';
        setTimeout(() => {
            alertText.innerText = '';
        }, 1000);
    }
});

