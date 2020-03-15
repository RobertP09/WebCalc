const total = document.getElementsByClassName('calculator__sum');
const buttons = document.querySelectorAll('.calculator__button');
const buttonsText = document.querySelectorAll('.calculator__button').innerHtml;


let numConcat = 0;
let numbers = [];

const addToNumConcat = (num) => {
    const clickedButton = num;
    console.log(clickedButton);
}

buttons.forEach(button => {
    button.addEventListener('click', addToNumConcat); 
});

console.log(buttonsText);