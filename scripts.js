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

const runButton = document.querySelector('.runButton');

runButton.addEventListener('mouseover', (e) => {
    runButton.style.background = 'red';
    
    const maxTop = window.innerHeight - runButton.offsetHeight;
    const maxLeft = window.innerWidth - runButton.offsetWidth;

    const randomTop = Math.floor(Math.random() * maxTop);
    const randomLeft = Math.floor(Math.random() * maxLeft);

    runButton.style.top = randomTop + 'px';
    runButton.style.left = randomLeft + 'px';
});

const paragraph = document.querySelector('p')

paragraph.addEventListener('click', (e) => {
    paragraph.innerText = paragraph.innerText.replaceAll(' ', '')
});

const ema = document.querySelector('.amail')

ema.addEventListener('click', (e) => {
    let len = 
});