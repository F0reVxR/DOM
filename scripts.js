"use strict"

let heading = document.getElementsByTagName('h1');

let secondHeading = document.getElementById('secondHeading');
let text = secondHeading.innerText;
let upperText = text.toUpperCase();

const button = document.querySelector('.firstButton');

function caps(){
    secondHeading.innerText = secondHeading.innerText.toLocaleUpperCase();
}

button.addEventListener('click', caps);