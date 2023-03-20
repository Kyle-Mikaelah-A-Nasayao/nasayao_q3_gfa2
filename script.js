var x, y, operation, result;

function valueXY() {
    x = document.getElementById("num1").valueAsNumber;
    y = document.getElementById("num2").valueAsNumber;
}
function addition() {
    operation = "sum";
    result = x + y;
}
function subtraction() {
    operation = "difference";
    result = x - y;
}
function multiplication() {
    operation = "product";
    result = x * y;
}
function division() {
    operation = "quotient";
    result = x / y;
}
function modulo() {
    operation = "remainder";
    result = x % y;
}
function results() {
    document.getElementById("results").innerHTML = "The " + operation + " of " + x + " and " + y + " is " + result + ".";
}
