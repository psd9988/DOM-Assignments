    //querySelectors
    var q=""
    var inputClass = document.querySelector('.inputClass');
    var buttonClass = document.querySelector('.buttonClass');
    var container = document.querySelector('.container');
    inputClass.addEventListener("change",()=>{
        q=inputClass.value


    })
    buttonClass.addEventListener('click',function(event){
        container.innerHTML =""

        fetch(`https://newsapi.org/v2/everything?q=${q}&from=2022-07-26&sortBy=publishedAt&apiKey=2402e398703a4b98a120d160f67db765`)
        .then(result=>result.json())
        .then(data=>{
            let articles = data["articles"]
            
            for(let i=0;i<10;i++){
                let article = articles[i]
                let html = `<div>
                    <img src=${article["urlToImage"]}>
                    <h1>${article["title"]} </h1>
                    <p>${article["author"]}</p>
                    <p>${article["description"]} <a href=${article["url"]}>Read more</a> </p>
                    <p class="empty"></p>
                  </div>`

                container.innerHTML+=html
              
                
            }
        }).catch(err=>alert("incorrect input. Please type correct english!"))
    })