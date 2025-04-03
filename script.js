let num1 = 'noNumber';
let num2 = 'noNumber';
let displayNumber = 0;
let buttonValue = 0;
let currentValue = 0;
let mathFunction = '';
let answer = 0;
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

equals.addEventListener('click', () => {
    if( num1 === 'noNumber' && num2 === 'noNumber') {
        console.log('No se eviaron numeros');
        num1 = currentValue;
        displayElement.textContent = num1;
    } else {
        num2 = currentValue;
        operate(num1, num2, mathFunction);
        answer = Number(SubmitEvent.toFixed(7));
        console.log('La respuesta despues de equals es ' + answer);
        displayElement.textContent = answer;
        num1 = answer;
        num2 = 'noNumber';
        mathFunction = '';
    }
});

const decimal = document.querySelector('#dot');

decimal.addEventListener('click', () => {
    decimalCheck = displayElement.textContent.includes('.');
    if (decimalCheck == true) {
        decimal.disabled = true;
    } else {
        decimal.disabled = false;
    }
});

function decimalCheck() {
    decimalCheck = displayElement.textContent.includes('.');
    if (decimalCheck == true) {
        decimal.disabled = true;
    } else {
        decimal.disabled = false;
    }
}

function deleteNumber() {
    delNumberString = displayElement.textContent;
    newNumber = delNumberString.slice(0, -1);
    newDisplay = Number(newNumber);
    currentValue = newDisplay;
    displayElement.textContent = newDisplay;
    if (num2 === 'noNumber') {
        num1 = newDisplay;
        answer = num1;
        res = num1;
    }
}

const delNumber = document.querySelector('#backspace');

delNumber.addEventListener('click', deleteNumber);

function percentCalc() {
    currentValue = Number(displayElement.textContent);
    newNumber = currentValue/100;
    displayElement.textContent = newNumber;
    currentValue = newNumber;
    if (num2 === 'noNumber') {
        num1 = currentValue;
        answer = num1;
        res = num1;
    }
}

const percentage = document.querySelector('#%');

percentage.addEventListener('click', percentCalc);

function positiveNegative() {
    currentValue = Number(displayElement.textContent);
    newNumber = currentValue*-1;
    displayElement.textContent = newNumber;
    currentValue = newNumber;
    if (num2 === 'no Number') {
        num1 = currentValue;
        answer = num1;
        res = num1;
    }
};

const posNeg = document.querySelector('#+/-');

posNeg.addEventListener('click', positiveNegative);

// const buttons = document.querySelectorAll('.buttons');

// buttons.forEach((buttons) => {
//     buttons.addEventListener('mouseenter', () => {
//         buttons.style
//     });
// });



const toggle = document.querySelector(".toggle");

toggle.onclick = () => {
    toggle.classList.toggle("active");
    calculator.classList.toggle("dark")
    isDark = !isDark
}