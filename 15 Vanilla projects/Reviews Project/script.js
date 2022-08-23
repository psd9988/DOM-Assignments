const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

let count = 0;
let rightButton = document.querySelector('.rightButton');
let leftButton = document.querySelector('.leftButton');
let surpriseBtn = document.querySelector('.surpriseBtn');
let container = document.querySelector('.container');
let image = document.querySelector('.image');
let name = document.querySelector('.name');
let job = document.querySelector('.job');
let text = document.querySelector('.text');



rightButton.addEventListener('click', ()=>{
  count++
  if(count > 3){
    count = 0;
  }
  image.src = reviews[count].img
  name.innerText = reviews[count].name  
  job.textContent = reviews[count].job
  text.textContent = reviews[count].text

})

leftButton.addEventListener('click', ()=>{
  count--
  if(count < 0){
    count = 3;
  }
  image.src = reviews[count].img
  name.innerText = reviews[count].name  
  job.textContent = reviews[count].job
  text.textContent = reviews[count].text

})

surpriseBtn.addEventListener('click', ()=>{
  let random = Math.floor(Math.random() *reviews.length);
console.log(random)
  image.src = reviews[random].img
  name.innerText = reviews[random].name  
  job.textContent = reviews[random].job
  text.textContent = reviews[random].text

})

















































  
// let container = document.querySelector('.container');
// container.innerHTML = '';
// let count = 0;
// let review = reviews[count];
// let reviewEl = document.createElement('div');
// reviewEl.classList.add('review');

// let textContainer = document.createElement('div');
// textContainer.classList.add('textContainer');
// reviewEl.appendChild(textContainer);


// let image = document.createElement('img');
// image.src = review.img;
// textContainer.appendChild(image);

// let name = document.createElement('h3');
// name.innerHTML = review.name;
// textContainer.appendChild(name);



// let job = document.createElement('h4');
// job.innerHTML = review.job;
// textContainer.appendChild(job);

// let text = document.createElement('p');
// text.innerHTML = review.text;
// textContainer.appendChild(text);

// let leftButton = document.createElement('button');
// leftButton.innerHTML = '<';
// textContainer.appendChild(leftButton);
// let rightButton = document.createElement('button');
// rightButton.innerHTML = '>';
// textContainer.appendChild(rightButton);
// let lbreak = document.createElement('br');
// textContainer.appendChild(lbreak);
// let surpriseButton = document.createElement('button');
// surpriseButton.innerHTML = 'surprise me';
// textContainer.appendChild(surpriseButton);

// container.appendChild(reviewEl);

// function changeContainer(count){
   
//     review = reviews[count+1];
//     reviewEl.innerHTML = '';
//     textContainer = document.createElement('div');
//     textContainer.classList.add('textContainer');
//     reviewEl.appendChild(textContainer);

//     image = document.createElement('img');
//     image.src = review.img;
//     textContainer.appendChild(image);

//     name = document.createElement('h3');
//     name.innerHTML = review.name;
//     textContainer.appendChild(name);

//     job = document.createElement('h4');
//     job.innerHTML = review.job;
//     textContainer.appendChild(job);
//     text = document.createElement('p');
//     text.innerHTML = review.text;
//     textContainer.appendChild(text);
//     leftButton = document.createElement('button');
//     leftButton.innerHTML = '<';
//     textContainer.appendChild(leftButton);
//     rightButton = document.createElement('button');
//     rightButton.innerHTML = '>';
//     textContainer.appendChild(rightButton);
//     lbreak = document.createElement('br');
//     textContainer.appendChild(lbreak);
//     surpriseButton = document.createElement('button');
//     surpriseButton.innerHTML = 'surprise me';
//     textContainer.appendChild(surpriseButton);
//     return reviewEl.innerHTML;
// }

// rightButton.addEventListener('click', () => {
//     changeContainer(count);

// } );

// // leftButton.addEventListener('click', () => {
// //    console.log('hello');
// // }
// // );

// // surpriseButton.addEventListener('click', () => {
// //     const randomNumber = Math.floor(Math.random() * reviews.length);
// //     container.innerHTML = '';
// //     showReviews(reviews.slice(randomNumber));
// // }
// // );





