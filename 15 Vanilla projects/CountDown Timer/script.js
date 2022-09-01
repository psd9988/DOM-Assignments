setInterval(()=>{

// Time conversions for the entire project starts here--------------------------

let goalDate = new Date("11 September 2022 11:30:00").getTime();
// getTime() method returns time is in milliseconds

// You can get milliseconds easily by multiplying seconds by 1000

let currentDate = new Date().getTime();

let timeRemaining = goalDate - currentDate;

let days = Math.floor(timeRemaining/86400000);
// 1 day = 86,400,000 ms

let hours = timeRemaining - (86400000 * days)
hours = Math.floor(hours / 3600000);
// 1 hr = 3,600,000 ms

let minutes = timeRemaining - ((86400000 * days) + (3600000 * hours));
minutes = Math.floor(minutes / 60000);
// 1 min = 60,000 ms

let seconds = Math.floor((timeRemaining - ((86400000 * days) + (3600000 * hours) + (minutes * 60000)))/1000);

// Time conversions for the entire project ends here--------------------------

let daysRemaining = document.querySelector('.days');
let hoursRemaining = document.querySelector('.hours');
let minutesRemaining = document.querySelector('.mins');
let secondsRemaining = document.querySelector('.secs');

daysRemaining.innerHTML = `${days} DAYS`;
hoursRemaining.innerHTML = `${hours} HRS`;
minutesRemaining.innerHTML = `${minutes} MINS`;
secondsRemaining.innerHTML = `${seconds} SECS`;
},1000);