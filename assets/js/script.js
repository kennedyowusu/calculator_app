function appendToResult(value) {
    const calculateInput = document.getElementById("Calculate");
    calculateInput.value += value;
}

function clearResult() {
    const calculateInput = document.getElementById("Calculate");
    calculateInput.value = "";
}

function calculate() {
    const calculateInput = document.getElementById("Calculate"); // An error here. Let's correct it.
    const userInput = calculateInput.value;

    try {
        const result = evaluateExpression(userInput);
        displayResult(result);
    } catch (error) {
        displayError();
    }
}

function evaluateExpression(expression) {
    const sanitizedExpression = sanitizeExpression(expression);
    return Function('"use strict";return (' + sanitizedExpression + ')')();
}

function sanitizeExpression(expression) {
    return expression.replace(/[^-()\d/*+.]/g, '');
}

function displayResult(result) {
    const calculateInput = document.getElementById("Calculate");
    calculateInput.value = result;
}

function displayError() {
    const calculateInput = document.getElementById("Calculate");
    calculateInput.value = "Error";
}


// Awesome. That will be all for this video.

// Thanks for watching!!!