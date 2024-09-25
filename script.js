let expression = '';

function appendToDisplay(value) {
    const display = document.getElementById("display");
    expression += value;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    document.getElementById("display").value = '';
    document.getElementById("result").innerText = '';
}

function calculate() {
    if (expression.includes('+')) {
        document.getElementById("result").innerText = "imissyou";
    } else {
        try {
            const result = eval(expression);
            document.getElementById("result").innerText = result;
        } catch (error) {
            document.getElementById("result").innerText = "Error";
        }
    }
}
