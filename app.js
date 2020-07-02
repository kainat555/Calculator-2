function getNum(num) {
    var display = document.getElementById("display");
    display.value += num;
}

function resetBtn() {
    var display = document.getElementById("display");
    display.value = "";
}

function calc() {
    var display = document.getElementById("display"); 1
    display.value = eval(display.value);
}

function deleteBtn() {
    var display = document.getElementById("display");
    // display.value = display.value.slice(0,display.value.length - 1); or 
    display.value = display.value.substr(0, display.value.length - 1);
}


function squareBtn() {
    var display = document.getElementById("display");
    display.value = display.value * display.value;
}

function cubeBtn() {
    var display = document.getElementById("display");
    display.value = display.value * display.value * display.value;
}


function halfBtn() {
    var display = document.getElementById("display");
    display.value = (display.value / 2);
}

function squareRootBtn() {
    var display = document.getElementById("display");
    display.value = Math.sqrt(display.value);
}

function decimalBtn() {
    var display = document.getElementById("display");
    display.value += ".";
}

function quarterBtn() {
    var display = document.getElementById("display");
    display.value = (display.value / 4);
}