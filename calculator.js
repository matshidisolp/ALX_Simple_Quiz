// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Helper to get input values
function getNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return [number1, number2];
}

// Event listeners
document.getElementById('add').addEventListener('click', function() {
    const [n1, n2] = getNumbers();
    document.getElementById('calculation-result').textContent = add(n1, n2);
});

document.getElementById('subtract').addEventListener('click', function() {
    const [n1, n2] = getNumbers();
    document.getElementById('calculation-result').textContent = subtract(n1, n2);
});

document.getElementById('multiply').addEventListener('click', function() {
    const [n1, n2] = getNumbers();
    document.getElementById('calculation-result').textContent = multiply(n1, n2);
});

document.getElementById('divide').addEventListener('click', function() {
    const [n1, n2] = getNumbers();
    document.getElementById('calculation-result').textContent = divide(n1, n2);
});
