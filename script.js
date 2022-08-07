// create variable to store user input
let inputNumber = "";
// variables to store subsequent input and operator
let firstNumber = "";
let secondNumber = "";
let currentOperator = "";

// declare basic calculator functionality
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

// add the value input into a string 
function buttonValue(click) {
    click.stopPropagation();
    inputNumber += this.id;
    updateCalculatorDisplay();
}
// set the current operator
function operatorValue(click) {
    click.stopPropagation();
    currentOperator = this.id;
    firstNumber = inputNumber;
    inputNumber = "";
}
// perform the actual operation
function operate(a, b, operator) {
    let first = parseInt(a, 10);yt
    let second = parseInt(b, 10);

    if (operator === 'add') {
        add(first, second);
        updateCalculatorDisplay();
    }

}

// clear the calculator screen
function clear() {
    inputNumber = "";
    updateCalculatorDisplay();
}

function backspace() {
    let tempString = "";
    tempString = inputNumber.slice(0, -1);
    inputNumber = tempString;
    updateCalculatorDisplay();
}

// update the current number
function updateCalculatorDisplay() {
    const calculatorDisplay = document.querySelector('.lowerDisplay');
    calculatorDisplay.textContent = `${inputNumber}`;
}

// get the number input for the calculator
const calculatorButtons = document.querySelectorAll('.numberButton');
calculatorButtons.forEach(button => button.addEventListener('click', buttonValue, {capture: false}));

// get the operator
const calculatorOperator = document.querySelectorAll('.operatorButton');
calculatorButtons.forEach(button => button.addEventListener('click', buttonValue, {capture: false}));

// clear button functionality
const calculatorClear = document.querySelector('.clear');
calculatorClear.addEventListener('click', clear, {capture: false});

// backspace button functionality
const calculatorBackspace = document.querySelector('#backspace');
calculatorBackspace.addEventListener('click', backspace, {capture: false});