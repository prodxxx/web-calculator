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