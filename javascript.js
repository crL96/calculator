function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function operate(operator, a, b) {
    return operator(a, b);
}

let a = 0;
let b = 0;
let operator = null;
let currentNumber = "";

const displayNr = document.querySelector("#displayNr");


// All numerical buttons
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
    currentNumber = currentNumber + "1";
    displayNr.textContent = currentNumber;
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    currentNumber = currentNumber + "2";
    displayNr.textContent = currentNumber;
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
    currentNumber = currentNumber + "3";
    displayNr.textContent = currentNumber;
});

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", () => {
    currentNumber = currentNumber + "4";
    displayNr.textContent = currentNumber;
});

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", () => {
    currentNumber = currentNumber + "5";
    displayNr.textContent = currentNumber;
});

const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", () => {
    currentNumber = currentNumber + "6";
    displayNr.textContent = currentNumber;
});

const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", () => {
    currentNumber = currentNumber + "7";
    displayNr.textContent = currentNumber;
});

const btn8 = document.querySelector("#btn8");
btn8.addEventListener("click", () => {
    currentNumber = currentNumber + "8";
    displayNr.textContent = currentNumber;
});

const btn9 = document.querySelector("#btn9");
btn9.addEventListener("click", () => {
    currentNumber = currentNumber + "9";
    displayNr.textContent = currentNumber;
});

const btn0 = document.querySelector("#btn0");
btn0.addEventListener("click", () => {
    currentNumber = currentNumber + "0";
    displayNr.textContent = currentNumber;
});


//Special buttons
const btnAC = document.querySelector("#btnAC");
btnAC.addEventListener("click", () => {
    currentNumber = "";
    a = 0;
    b = 0;
    operator = null;
    displayNr.textContent = currentNumber;
});


//operator buttons
const btnAdd = document.querySelector("#btnAdd");
btnAdd.addEventListener("click", () => {
    a = Number(currentNumber);
    currentNumber = "";
    operator = add;
    displayNr.textContent = currentNumber;
});

const btnSubtract = document.querySelector("#btnSubract");
btnSubtract.addEventListener("click", () => {
    a = Number(currentNumber);
    currentNumber = "";
    operator = subtract;
    displayNr.textContent = currentNumber;
});

const btnMultiply = document.querySelector("#btnMultiply");
btnMultiply.addEventListener("click", () => {
    a = Number(currentNumber);
    currentNumber = "";
    operator = multiply;
    displayNr.textContent = currentNumber;
});

const btnDivide = document.querySelector("#btnDivide");
btnDivide.addEventListener("click", () => {
    a = Number(currentNumber);
    currentNumber = "";
    operator = divide;
    displayNr.textContent = currentNumber;
});

const btnMod = document.querySelector("#btnMod");
btnMod.addEventListener("click", () => {
    a = Number(currentNumber);
    currentNumber = "";
    operator = modulus;
    displayNr.textContent = currentNumber;
});

const btnEquals = document.querySelector("#btnEquals");
btnEquals.addEventListener("click", () => {
    b = Number(currentNumber);
    currentNumber = operate(operator, a, b);
    displayNr.textContent = currentNumber;
});