function calculateResult() {
    // Get the input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    
    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return;
    }

    let result;

    // Perform the calculation based on the selected operator
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Cannot divide by zero');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Invalid operator');
            return;
    }

    // Display the result
    document.getElementById('result').textContent = 'Result: ' + result;
}