const display = document.getElementById("display");

function addvalue(value) {
    display.value += value;
}

function cleardisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function Calculate() {
    try {
        display.value = Function("return " + display.value)();
    } catch {
        display.value = "Error";
    }
}
