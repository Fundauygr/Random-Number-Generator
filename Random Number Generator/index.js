

const myButton = document.getElementById("myButton");
const Label1 = document.getElementById("Label1");
const min = 1;
const max = 999;
let randomNum1;


myButton.onclick = function () {
    randomNum1 = Math.floor(Math.random() * max) + min;
    Label1.textContent = randomNum1;
}


