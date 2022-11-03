// push number to array
// operator selector button press adds code or function
// push number to array
// equals sign to calculate
// operate function runs on = (takes 2 numbers & operator and returns)

let oneButton = document.getElementsByClassName("div1")
let twoButton = document.getElementsByClassName("div2")
let threeButton = document.getElementsByClassName("div3")
let fourButton = document.getElementsByClassName("div4")
let fiveButton = document.getElementsByClassName("div5")
let sixButton = document.getElementsByClassName("div6")
let sevenButton = document.getElementsByClassName("div7")
let eightButton = document.getElementsByClassName("div8")
let nineButton = document.getElementsByClassName("div9")
let zeroButton = document.getElementsByClassName("div21")
let doubleZeroButton = document.getElementsByClassName("div22")
let displayArray = []

let solutionOutput = document.getElementById("solution");
let displayValue = document.getElementById("display-value");
let operator = ""

displayValue.textContent = displayArray.join('')

// pressing function sets operator

// oneButton.addEventListener("click", () =>
//     displayArray.push(1)
// );

// Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

// set new class input add event listener for anthing with input clicked use .textcontent to output
// function addinput() {
//     displayArray.push(inputButton.textContent)
// }

let inputButton = document.getElementsByClassName("input")

// inputButton.addEventListener("click", addinput)

const buttonInputs = document.querySelectorAll(".input")

buttonInputs.forEach(buttonInput => {
    buttonInput.addEventListener('click', handleClick)
});

function handleClick(e) {
    let { id } = e.target
    displayArray.push(id)
    displayValue.textContent = displayArray.join('')
}

// pressing number clears calculator
function clearbtn() {
    solutionOutput.textContent = ""
    displayValue.textContent = ""
    operator = ""
    displayArray = []
}

// maths functions

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

//Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

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
