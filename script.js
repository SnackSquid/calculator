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

function operate(a, b) {

}

// return the value of the button
function buttonValue(click) {
    click.stopPropogation();
    console.log(this.id); 
}
// update the current number
function updateCalculatorDisplay() {
    const calculatorDisplay = document.querySelector('.lowerDisplay');
    calculatorDisplay.textContent = `123`;
}
// get the input for the calculator
const calculatorButtons = document.querySelectorAll('button');
calculatorButtons.forEach(button => button.addEventListener('click', buttonValue, {capture: false}));

updateCalculatorDisplay();