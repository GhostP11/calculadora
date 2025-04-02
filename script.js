let num1 = 'noNumber';
let num2 = 'noNumber';
let displayNumber = 0;
let buttonValue = 0;
let currentValue = 0;
let mathFunction = '';
let answere = 0;
let clearDisplay = -1;
let res = 0;
let displayValue = 0;
let includesDecimal = '';

function add(num1, num2) {
    res = num1 + num2;
}

function subtract(num1, num2) {
    res = num1 - num2;
}

function multiply(num1, num2) {
    res = num1 * num2;
}

function divide(num1,num2) {
    res = num1 / num2;
}

function clearTotal() {
    res === 0;
}

function operate(num1, num2, mathFunction) {
    if (mathFunction === "add") {
        add(num1, num2);
    } else if (mathFunction === 'subtract') {
        subtract(num1, num2);
    } else if (mathFunction === 'multiply') {
        multiply(num1, num2);
    } else if (mathFunction === 'divide') {
        divide(num1, num2);
    } else if (mathFunction === 'divide' && num2 === 0) {
        displayElement.textContent = displayNumber;
        alert('Error quieres dividir entre 0');
    } else if (mathFunction === 'clearTotal') {
        clearTotal();
    } else {
    }
}

function concatNumbers() {
    displayElement = document.getElementById('displayScreen');
    displayNumber = displayElement.textContent;
    buttonValue = this.textContent;
    decimal.disabled = false;
    desimalCheck
    if (displayNumber === '0') {
        displayElement.textContent = buttonValue;
        currentValue = Number(displayNumber + buttonValue);
    } else if (clearDisplay === 1 && displayNumber.length < 9) {
        displayNumber = '';
        currentValue = 0;
        clearDisplay = -1;
        displayElement.textContent = displayNumber + buttonValue;
        currentValue = Number(displayNumber + buttonValue);
    } else if (displayNumber.length < 9) {
        displayElement.textContent = displayNumber + buttonValue;
        currentValue = Number(displayNumber + buttonValue);
    } else {
    }
}

const numberButtons = document.querySelector('.numbers');

numberButtons.forEach(button => {
    button.addEventListener('click', concatNumbers);
});

function clearDisplayFunction() {
    if (clearDisplay === 1) {
        clearDisplay = -1;
    } else {
        ''
    }
}

const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    displayElement.textContent = 0;
    num1 = 'noNumber';
    num2 = 'noNumber';
});

const equals = document.querySelector('#equals');
const buttons = document.querySelectorAll("button")
const toggle = document.querySelector(".toggle")

toggle.onclick = () => {
    toggle.classList.toggle("active");
    calculator.classList.toggle("dark")
    isDark = !isDark
}