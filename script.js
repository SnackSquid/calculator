// create variable to store user input
let inputNumber = "";
// variables to store subsequent input and operator
let storedNumber = "";
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
    if (b === 0){
        return "What are you doing???"
    }
    else {
        return a / b;
    }  
}

// adds numbers to the calculator and updates the screen
function buttonValue(click) {
    click.stopPropagation();
    inputNumber += this.id;
    updateCalculatorDisplayLower(inputNumber);
    updateClearButton();
}
// set the current operator
function operatorValue(click) {
    click.stopPropagation();
    // if there is already a number stored let the user change the operator
    if (storedNumber != "") {
        currentOperator = this.id;
        updateCalculatorDisplayUpper(storedNumber);
    }

    // make sure there is an original number before the calculator will attempt to assign it an operator
    else if (inputNumber == "") {
        console.log('not doing it')
    }
    // make sure there is not a number stored, then store the number and operator
    else if (storedNumber == "") {
        currentOperator = this.id;
        storedNumber = inputNumber;
        updateCalculatorDisplayUpper(storedNumber);
        clearLower();
    }
}
// perform the actual operation
function operate() {
    let first = parseInt(storedNumber, 10);
    let second = parseInt(inputNumber, 10);

    // make sure that there is a valid operator and valid second number
    if (currentOperator === '') return;
    else if (inputNumber == '') return;

    else if (currentOperator === '+') {
        inputNumber = add(first, second);
        updateCalculatorDisplayLower(inputNumber);
        clearUpper();
    }
    else if (currentOperator === '-') {
        inputNumber = subtract(first, second);
        updateCalculatorDisplayLower(inputNumber);
        clearUpper();
    }
    else if (currentOperator === 'x') {
        inputNumber = multiply(first, second);
        updateCalculatorDisplayLower(inputNumber);
        clearUpper();
    }
    else if (currentOperator === '÷') {
        inputNumber = divide(first, second);
        updateCalculatorDisplayLower(inputNumber);
        clearUpper();
    }
}

// clear the entire calculator screen
function clear() {
    clearLower();
    clearUpper();
    this.textContent = 'AC';
}
// clear just the lower section (inputNumber)
function clearLower() {
    inputNumber = ""
    updateCalculatorDisplayLower(inputNumber);
}
// clear just the upper section 
function clearUpper() {
    storedNumber = ""
    currentOperator = ""
    updateCalculatorDisplayUpper(storedNumber);
}
// makes the backspace work
function backspace() {
    let tempString = "";
    tempString = inputNumber.slice(0, -1);
    inputNumber = tempString;
    updateCalculatorDisplayLower(inputNumber);
}

// update the current number on the bottom
function updateCalculatorDisplayLower(inputNumber) {
    const calculatorDisplayLower = document.querySelector('.lowerDisplay');
    calculatorDisplayLower.textContent = `${inputNumber}`;
}

// update the current number with the first number displayed and operator displayed
function updateCalculatorDisplayUpper(storedNumber) {
    const calculatorDisplayUpper = document.querySelector('.upperDisplay');
    calculatorDisplayUpper.textContent = `${storedNumber} ${currentOperator}`;
}

function updateClearButton() {
    const clearButton = document.querySelector('.clear');
    clearButton.textContent = 'C';
}

// get the number input for the calculator
const calculatorNumberButtons = document.querySelectorAll('.numberButton');
calculatorNumberButtons.forEach(button => button.addEventListener('click', buttonValue, {capture: false}));

// get the operator 
const calculatorOperators = document.querySelectorAll('.operatorButton');
calculatorOperators.forEach(button => button.addEventListener('click', operatorValue, {capture: false}));

// clear button functionality
const calculatorClear = document.querySelector('#clear');
calculatorClear.addEventListener('click', clear, {capture: false});

// backspace button functionality
const calculatorBackspace = document.querySelector('#backspace');
calculatorBackspace.addEventListener('click', backspace, {capture: false});

// equals button functionality
const calculatorEquals = document.querySelector('#equals');
calculatorEquals.addEventListener('click', operate, {capture: false});