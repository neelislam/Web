let display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
}

function inputValue(value) {
    display.value += value;
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}