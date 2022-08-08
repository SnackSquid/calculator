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
    if (b === 0){
        return "What are you doing???"
    }
    else {
        return a / b;    
    }  
}

// add the value input into a string 
function buttonValue(click) {
    click.stopPropagation();
    inputNumber += this.id;
    updateCalculatorDisplayLower(inputNumber);
    updateClearButton();
}
// set the current operator
function operatorValue(click) {
    click.stopPropagation();

    if (inputNumber == "") {
        console.log('not doing it')
    }

    else if (firstNumber == "") {
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
function operate() {
    let first = parseInt(firstNumber, 10);
    let second = parseInt(inputNumber, 10);
    let newNumber = 0;

    // make sure that there is a valid operator and valid second number
    if (currentOperator === '') return;
    else if (inputNumber == '') return;

    else if (currentOperator === '+') {
        newNumber = add(first, second);
        updateCalculatorDisplayLower(newNumber);
    }
    else if (currentOperator === '-') {
        newNumber = subtract(first, second);
        updateCalculatorDisplayLower(newNumber);
    }
    else if (currentOperator === 'x') {
        newNumber = multiply(first, second);
        updateCalculatorDisplayLower(newNumber);
    }
    else if (currentOperator === '÷') {
        newNumber = divide(first, second);
        updateCalculatorDisplayLower(newNumber);
    }

    clearUpper();

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
    firstNumber = ""
    currentOperator = ""
    updateCalculatorDisplayUpper();
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
function updateCalculatorDisplayUpper() {
    const calculatorDisplayUpper = document.querySelector('.upperDisplay');
    calculatorDisplayUpper.textContent = `${firstNumber} ${currentOperator}`;
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