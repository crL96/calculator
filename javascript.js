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

let a = 0;
let b = 0;
let operator;

function operate(operator, a, b) {
    return operator(a, b);
}