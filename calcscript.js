// push number to array
// operator selector button press adds code or function
// push number to array
// equals sign to calculate
// operate function runs on = (takes 2 numbers & operator and returns)

let displayArray = []

let solutionOutput = document.getElementById("solution");
let displayValue = document.getElementById("display-value");
let operator = ""

displayValue.textContent = displayArray.join('')

// add keyboard support

// function to split array into two numbers

function arrayToNum() {
    // filter operators, save second and at end of function set it to operator


    console.log(displayArray)
    // operate(num1, num2, operator)
}

// pressing function sets operator


// Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

let inputButton = document.getElementsByClassName("input")

const buttonInputs = document.querySelectorAll(".input")

buttonInputs.forEach(buttonInput => {
    buttonInput.addEventListener('click', handleClick)
});

function handleClick(e) {
    let { id } = e.target
    displayArray.push(id)
    displayValue.textContent = displayArray.join('')
    //for loop (i - 1) to stop two operators in a row
    // loop not required displayArray.pop() !== number && id != number not 3 === as string vs number
    //second array to match operator with function to prevent overwriting
    //14 max for array before shrinking array size - make new function
}

//backspace clear , if statement reset operator

function backspaceCLR() {
    let popped = displayArray.pop()
    console.log(popped)
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
        return solutionOutput.textContent = add(num1, num2)
    } else if (operator == "subtract") {
        return solutionOutput.textContent = subtract(num1, num2)
    } else if (operator == "multiply") {
        return solutionOutput.textContent = multiply(num1, num2)
    } else if (operator == "divide") {
        return solutionOutput.textContent = divide(num1, num2)
    }
}
