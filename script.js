let current = "";
let operator = "";
let operand = null;

function press(char) {
    if ("0123456789.".includes(char)) {
        current += char;
    } else if ("+-*/".includes(char)) {
        if (current) {
            if (operand === null) {
                operand = parseFloat(current);
            } else {
                operand = operate(operand, parseFloat(current), operator);
            }
            operator = char;
            current = "";
        }
    }
    updateDisplay();
}

function calculate() {
    if (operator && current) {
        operand = operate(operand, parseFloat(current), operator);
        current = operand.toString();
        operator = "";
    }
    updateDisplay();
}

function operate(a, b, op) {
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '*') return a * b;
    if (op === '/') return b !== 0 ? a / b : 'Error';
    return b;
}

function clearDisplay() {
    current = "";
    operator = "";
    operand = null;
    updateDisplay();
}

function delChar() {
    current = current.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = current || operand || "";
}
