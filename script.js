function sum() {
    var firstval = parseInt(document.getElementById("firstvalue").value)
    var secondval = parseInt(document.getElementById("secondvalue").value)
    var answer = firstval + secondval
    var outputElement = document.getElementById("output")
    outputElement.innerHTML = answer
}
