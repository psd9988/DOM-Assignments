let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let numberInput = document.getElementById('number');
let buttonAddRow = document.getElementById('button_add_row');
let container = document.getElementById('container');


buttonAddRow.addEventListener('click', function () {
    var re = /\S+@\S+\.\S+/;

    if (nameInput.value == '') {
        document.getElementById('error1').innerHTML = 'Name is required';
        setTimeout(function () {
            document.getElementById('error1').innerHTML = '';
        }, 2000);
    } else if (emailInput.value == '') {
        document.getElementById('error2').innerHTML = 'Email is required';
        setTimeout(function () {
            document.getElementById('error2').innerHTML = '';
        }, 2000);
    }
    else if (!re.test(document.getElementById('email').value)) {
        document.getElementById('error2').innerHTML = 'Invalid Email';
        setTimeout(function () {
            document.getElementById('error2').innerHTML = '';
        }, 2000);
    }

    else if (numberInput.value == '') {
        document.getElementById('error3').innerHTML = 'Phone Number is required';
        setTimeout(function () {
            document.getElementById('error3').innerHTML = '';
        }, 2000);
    } else {
        document.getElementById('error1').innerHTML = '';
        document.getElementById('error2').innerHTML = '';
        document.getElementById('error3').innerHTML = '';

        let span1 = document.createElement('span');
        let span2 = document.createElement('span');
        let span3 = document.createElement('span');
        let span4 = document.createElement('span');

        span1.style.background = 'lightpink';
        span2.style.background = 'lightpink';
        span3.style.background = 'lightpink';
        span4.style.background = 'goldenrod';
        span4.style.color = 'white';

        span1.style.fontFamily = 'Cairo, sans-serif';
        span2.style.fontFamily = 'Cairo, sans-serif';
        span3.style.fontFamily = 'Cairo, sans-serif';
        span4.style.fontFamily = 'Cairo, sans-serif';


        span1.style.margin = '1px';
        span2.style.margin = '1px';
        span3.style.margin = '1px';
        span4.style.margin = '1px';
        span4.style.cursor = 'pointer';


        container.appendChild(span1).innerText = nameInput.value;
        container.appendChild(span2).innerText = emailInput.value;
        container.appendChild(span3).innerText = numberInput.value;
        container.appendChild(span4).innerText = 'Remove';

        span4.addEventListener('click', function () {
            container.removeChild(span1);
            container.removeChild(span2);
            container.removeChild(span3);
            container.removeChild(span4);
        });

    }
});