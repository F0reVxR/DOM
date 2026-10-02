"use strict"

let heading = document.getElementsByTagName('h1');

let secondHeading = document.getElementById('secondHeading');
let text = secondHeading.innerText;
let upperText = text.toUpperCase();

const button = document.querySelector('.firstButton');

let status = false;

button.addEventListener('click', (e) => {
    if (status === false){
        secondHeading.innerText = secondHeading.innerText.toLocaleUpperCase();
        status = true;
    }
    else{
        secondHeading.innerText = secondHeading.innerText.toLocaleLowerCase();
        status = false;
    }
});

