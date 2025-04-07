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
let isDark = true;

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
    if (mathFunction === 'add') {
        add(num1, num2);
    } else if (mathFunction === 'subtract') {
        subtract(num1, num2);
    } else if (mathFunction === 'multiply') {
        multiply(num1, num2);
    } else if (mathFunction === 'divide' && num2 === 0) {
        displayElement.textContent = displayNumber;
        alert('Error quieres dividir entre 0');
    } else if (mathFunction === 'divide') {
        divide(num1, num2);
    } else if (mathFunction === 'clearTotal') {
        clearTotal();
    } else {
    }
}

function concatNumbers() {
    displayElement = document.getElementById('display-screen');
    displayNumber = displayElement.textContent;
    buttonValue = this.textContent;
    decimal.disabled = false;
    decimalCheck
    if (displayNumber === '0') {
        displayElement.textContent = buttonValue;
        currentValue = Number(displayNumber + buttonValue);
    } else if (clearDisplay === 1 && displayNumber.length < 10) {
        displayNumber = '';
        currentValue = 0;
        clearDisplay = -1;
        displayElement.textContent = displayNumber + buttonValue;
        currentValue = Number(displayNumber + buttonValue);
    } else if (displayNumber.length < 10) {
        displayElement.textContent = displayNumber + buttonValue;
        currentValue = Number(displayNumber + buttonValue);
    } else {
    }
}

const numberButtons = document.querySelectorAll('.btn-numbers');

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
        answer = Number(res.toFixed(7));
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

const percentage = document.querySelector('#percent');

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

const posNeg = document.querySelector('#posNeg');

posNeg.addEventListener('click', positiveNegative);

const operators = document.querySelectorAll('.btn-operators');

operators.forEach((operators) => {
    operators.addEventListener('click', () => {
        storageCheck();
        mathFunction = operators.id;
    });
});

function storageCheck() {
    if (num1 === "noNumber") {
        console.log("Se mando la opcion 1");
        clearDisplay = 1;
        num1 = currentValue;
    } else if (num1 !== "noNumber") {
        num2 = currentValue;
        operate(num1, num2, mathFunction);
        answer = res;
        console.log('Se manda la segunda opcion y el la respuesta es ' + res);
        displayElement.textContent = answer;
        num1 = answer;
        num2 = "noNumber";
        currentValue = num1;
        mathFunction = '';
        clearDisplay = 1;
    } else {
        console.log('Se mando la opcion 3');
        clearDisplay = 1;
        num2 = currentValue;
    }
}

const calculator = document.querySelector('.calculator');
const toggle = document.querySelector(".toggle");

toggle.onclick = () => {
    toggle.classList.toggle("active");
    calculator.classList.toggle("dark")
    isDark = !isDark
}