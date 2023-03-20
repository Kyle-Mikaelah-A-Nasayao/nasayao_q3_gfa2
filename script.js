var operation, result;

function addition() {
    var x = document.getElementById("num1").valueAsNumber;
    var y = document.getElementById("num2").valueAsNumber;
    operation = "sum";
    result = x + y;
}
function subtraction() {
    var x = document.getElementById("num1").valueAsNumber;
    var y = document.getElementById("num2").valueAsNumber;
    operation = "difference";
    result = x - y;
}
function multiplication() {
    var x = document.getElementById("num1").valueAsNumber;
    var y = document.getElementById("num2").valueAsNumber;
    operation = "product";
    result = x * y;
}
function division() {
    var x = document.getElementById("num1").valueAsNumber;
    var y = document.getElementById("num2").valueAsNumber;
    operation = "quotient";
    result = x / y;
}
function modulo() {
    var x = document.getElementById("num1").valueAsNumber;
    var y = document.getElementById("num2").valueAsNumber;
    operation = "remainder";
    result = x % y;
}
function results() {
    var x = document.getElementById("num1").valueAsNumber;
    var y = document.getElementById("num2").valueAsNumber;
    document.getElementById("results").innerHTML = "The " + operation + " of " + x + " and " + y + " is " + result + ".";
}