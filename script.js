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
    updateCalculatorDisplayLower();
}
// set the current operator
function operatorValue(click) {
    click.stopPropagation();

    if (firstNumber == "") {
        currentOperator = this.id;
        firstNumber = inputNumber;
        updateCalculatorDisplayUpper();
        clearLower();
    }
    else {
        currentOperator = this.id;
        updateCalculatorDisplayUpper();
    }
    
}
// perform the actual operation
function operate(a, operator) {
    let first = parseInt(a, 10);
    let second = parseInt(inputNumber, 10);

    if (operator === '') {
        return;
    }

    else if (operator === '+') {
        add(first, second);
        updateCalculatorDisplayLower();
    }

}

// clear the calculator screen
function clear() {
    inputNumber = "";
    firstNumber = "";
    currentOperator = "";
    updateCalculatorDisplayUpper();
    updateCalculatorDisplayLower();
}

function clearLower() {
    inputNumber = ""
    updateCalculatorDisplayLower();
}

function clearUpper() {
    firstNumber = ""
    currentOperator = ""

}

function backspace() {
    let tempString = "";
    tempString = inputNumber.slice(0, -1);
    inputNumber = tempString;
    updateCalculatorDisplayLower();
}

// update the current number on the bottom
function updateCalculatorDisplayLower() {
    const calculatorDisplayLower = document.querySelector('.lowerDisplay');
    calculatorDisplayLower.textContent = `${inputNumber}`;
}

// update the current number with the first number displayed and operator displayed
function updateCalculatorDisplayUpper() {
    const calculatorDisplayUpper = document.querySelector('.upperDisplay');
    calculatorDisplayUpper.textContent = `${firstNumber} ${currentOperator}`;
}

// get the number input for the calculator
const calculatorButtons = document.querySelectorAll('.numberButton');
calculatorButtons.forEach(button => button.addEventListener('click', buttonValue, {capture: false}));

// get the operator 
const calculatorOperator = document.querySelectorAll('.operatorButton');
calculatorOperator.forEach(button => button.addEventListener('click', operatorValue, {capture: false}));

// clear button functionality
const calculatorClear = document.querySelector('#clear');
calculatorClear.addEventListener('click', clear, {capture: false});

// backspace button functionality
const calculatorBackspace = document.querySelector('#backspace');
calculatorBackspace.addEventListener('click', backspace, {capture: false});