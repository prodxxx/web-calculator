function selectop() {
    var operval = document.getElementById("opervalue").value
    switch (operval) {
        case '+':
            sum();
            break;
        case "-":
            subtract();
            break;
        case "*":
            multiply();
            break;
        case "/":
            divide();
            break;
        default:
            badop()
            break;
    }
}

function sum() {
    var firstval = parseInt(document.getElementById("firstvalue").value)
    var secondval = parseInt(document.getElementById("secondvalue").value)
    var answer = firstval + secondval
    var outputElement = document.getElementById("output")
    outputElement.innerHTML = answer
}

function subtract() {
    var firstval = parseInt(document.getElementById("firstvalue").value)
    var secondval = parseInt(document.getElementById("secondvalue").value)
    var answer = firstval - secondval
    var outputElement = document.getElementById("output")
    outputElement.innerHTML = answer
}

function multiply() {
    var firstval = parseInt(document.getElementById("firstvalue").value)
    var secondval = parseInt(document.getElementById("secondvalue").value)
    var answer = firstval * secondval
    var outputElement = document.getElementById("output")
    outputElement.innerHTML = answer
}

function divide() {
    var firstval = parseInt(document.getElementById("firstvalue").value)
    var secondval = parseInt(document.getElementById("secondvalue").value)
    var answer = firstval / secondval
    var outputElement = document.getElementById("output")
    outputElement.innerHTML = answer
}

function badop() {
    var answer = 'Please check your operator and try again'
    var outputElement = document.getElementById("output")
    outputElement.innerHTML = answer
}