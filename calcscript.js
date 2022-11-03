// push number to array
// operator selector button press adds code or function
// push number to array
// equals sign to calculate
// operate function runs on = (takes 2 numbers & operator and returns)

// pressing number clears calculator

let operator = ""

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "ERROR!"
    } else {
        return num1 / num2
    }
}

function percentage(num) {
    return num / 100
}

function clear() {
    //set solution to ""
    //set display-value to ""
}

function operate(num1, num2, operator) {
    if (operator == "add") {
        return add(num1, num2)
    } else if (operator == "subtract") {
        return subtract(num1, num2)
    } else if (operator == "multiply") {
        return multiply(num1, num2)
    } else if (operator == "divide") {
        return divide(num1, num2)
    }
}
