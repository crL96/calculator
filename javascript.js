let a = 0;
let b = 0;
let operator = null;
let currentNumber = "";
let operatorClicked = false;
let readyForClear = false;

const displayNr = document.querySelector("#displayNr");

// Buttons
// All numerical buttons
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
    clickNumber("1");
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    clickNumber("2");
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
    clickNumber("3");
});

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", () => {
    clickNumber("4");
});

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", () => {
    clickNumber("5");
});

const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", () => {
    clickNumber("6");
});

const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", () => {
    clickNumber("7");
});

const btn8 = document.querySelector("#btn8");
btn8.addEventListener("click", () => {
    clickNumber("8");
});

const btn9 = document.querySelector("#btn9");
btn9.addEventListener("click", () => {
    clickNumber("9");
});

const btn0 = document.querySelector("#btn0");
btn0.addEventListener("click", () => {
    clickNumber("0");
});

const btnDot = document.querySelector("#btnDot");
btnDot.addEventListener("click", () => {
    if (currentNumber.includes(".") == false) {
        clickNumber(".");
    }
});

//Special buttons
const btnAC = document.querySelector("#btnAC");
btnAC.addEventListener("click", () => {
    currentNumber = "";
    a = 0;
    b = 0;
    operator = null;
    displayNr.textContent = currentNumber;
    operatorClicked = false;
    readyForClear = false;
});

const btnNeg = document.querySelector("#btnNeg");
btnNeg.addEventListener("click", () => {
    currentNumber = String(currentNumber);
    
    if (currentNumber.includes("-") == true) {
        currentNumber = currentNumber.substring(1);
        displayNr.textContent = currentNumber;
    }
    else {
        currentNumber = "-" + currentNumber;
        displayNr.textContent = currentNumber;
    }
});

//operator buttons
const btnAdd = document.querySelector("#btnAdd");
btnAdd.addEventListener("click", () => {
    clickOperator(add);
});

const btnSubtract = document.querySelector("#btnSubract");
btnSubtract.addEventListener("click", () => {
    clickOperator(subtract);
});

const btnMultiply = document.querySelector("#btnMultiply");
btnMultiply.addEventListener("click", () => {
    clickOperator(multiply);
});

const btnDivide = document.querySelector("#btnDivide");
btnDivide.addEventListener("click", () => {
    clickOperator(divide);
});

const btnMod = document.querySelector("#btnMod");
btnMod.addEventListener("click", () => {
    clickOperator(modulus);
});

const btnEquals = document.querySelector("#btnEquals");
btnEquals.addEventListener("click", () => {
    if (operatorClicked == true) {
        b = Number(currentNumber);
    }
    else {
        a = Number(currentNumber);
    }   
    currentNumber = operate(operator, a, b);
    operatorClicked = false;
    displayNr.textContent = currentNumber;
    readyForClear = true;
});


//Functions
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

function clickOperator(opType) {
    if (operatorClicked == true) {
        b = Number(currentNumber);
        currentNumber = operate(operator, a, b);
        displayNr.textContent = currentNumber;
    }
    
    a = Number(currentNumber);
    operator = opType;
    operatorClicked = true;
    readyForClear = true;
}

function clickNumber(num) {
    if (readyForClear == true) {
        currentNumber = "";
        readyForClear = false;
    }
    currentNumber = currentNumber + num;
    displayNr.textContent = currentNumber;
}