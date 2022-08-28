let submitBtn = document.querySelector('.submitBtn');
let inputText = document.querySelector('.inputText');
let mainContainer = document.querySelector('.mainContainer');


    submitBtn.addEventListener('click', ()=>{
        mainContainer.innerHTML = '';
        fetch(`https://api.tvmaze.com/search/shows?q=${inputText.value}`)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            for(let i = 0; i< data.length; i++) {
                let myData = data[i]['show'];
                let image = `<img class="image" src="${myData['image']['original']}" alt="image">`;
                mainContainer.innerHTML += image;
                let showName = `<h3 class="showName">${myData['name']}</h3>`;
                mainContainer.innerHTML += showName;
                let startDate = `<p class="startDate">Start date: ${myData['premiered']}</p>`;
                mainContainer.innerHTML += startDate;
                let language = `<p class="language">Language: ${myData['language']}</p>`;
                mainContainer.innerHTML += language;
                let Summary = `<p class="summary">Summary <br/>${myData['summary']}</p>`
                mainContainer.innerHTML += (Summary);
                
            }
        })
        .catch(err =>{
            
        })
        })
 


        

       