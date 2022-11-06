let displayArray = []
let solutionOutput = document.getElementById("solution");
let displayValue = document.getElementById("display-value");
let memValue = document.getElementById("memory")
let operator = ""
let numbersinArray = []
let operatorType = []
let splitNumArray = []
let result = 0

displayValue.textContent = displayArray.join('')

// add keyboard support

// code % button

// function to split array into two numbers
function arrayToNum() {
    let arrayEnd = displayArray[displayArray.length - 1]
    console.log(displayArray)
    let operatorPosition = []

    if (idCheck(arrayEnd) == false) {
        return console.log("incomplete expression")
    } else {
        for (let i = 0; i < displayArray.length; i++) {
            if (idCheck(displayArray[i]) == false) {
                operatorPosition.push(i)
            }
        }

        for (let i = 0; i < displayArray.length; i++) {
            if (displayArray[i] == ' + ') {
                operatorType.push("add")
            } else if (displayArray[i] == ' − ') {
                operatorType.push("subtract")
            } else if (displayArray[i] == ' ÷ ') {
                operatorType.push("divide")
            } else if (displayArray[i] == " × ") {
                operatorType.push("multiply")
            }
        }
        // console.log(numberArrayGen())

        console.log(operatorType)

        let numbersinArray = numberArrayGen()
        splitNumArray = numbersinArray.join("")
        splitNumArray = splitNumArray.split(' ').map(Number)

        console.log(numbersinArray)
        console.log(splitNumArray)
        console.log(splitNumArray.length)
        console.log(operatorType)
        console.log(operatorType.length)

        calculation()
        backendClear()
    }
}

function memSave() {
    let arrayEnd = displayArray[displayArray.length - 1]
    let savedNumber = ""

    if (idCheck(arrayEnd) == false && memValue.textContent !== "") {
        console.log(memValue.textContent)
        let memRC = memValue.textContent

        displayArray.push(memRC);
        displayValue.textContent = displayArray.join('')
    } else {
        savedNumber = solutionOutput.textContent
        memValue.textContent = savedNumber
        console.log(typeof savedNumber)
    }

}

function memClear() {
    memValue.textContent = ""
}

function backendClear() {
    result = 0
    operator = ""
    numbersinArray = []
    operatorType = []
    splitNumArray = []
}

function calculation() {
    if (splitNumArray.length == 1 && operatorType.length == 0) {
        console.log("single number")
        return solutionOutput.textContent = splitNumArray
    } else if (splitNumArray.length === 1 && operatorType.length >= 1) {
        console.log("running 1")
        num1 = result
        num2 = splitNumArray[0]
        operator = operatorType[0]
        let finalresult = operate(num1, num2, operator)
        console.log(operatorType)
        console.log(result)
        return solutionOutput.textContent = Math.round((finalresult + Number.EPSILON) * 1000000) / 1000000
    } else if (splitNumArray.length == 2 && operatorType.length == 1) {
        console.log("running 2")
        num1 = splitNumArray[0]
        num2 = splitNumArray[1]
        operator = operatorType[0]
        result += operate(num1, num2, operator)
        console.log(result)
        return solutionOutput.textContent = Math.round((result + Number.EPSILON) * 1000000) / 1000000
    } else if (splitNumArray.length === operatorType.length) {
        console.log("extra operator at end")
        operatorType.pop()
        calculation()
    } else {
        console.log("running 3")
        num1 = splitNumArray[0]
        num2 = splitNumArray[1]
        operator = operatorType[0]
        splitNumArray.shift()
        splitNumArray.shift()
        operatorType.shift()
        result += operate(num1, num2, operator)
        console.log(result)
        calculation()
    }
}

function numberArrayGen() {
    for (let i = 0; i < displayArray.length; i++) {
        if (idCheck(displayArray[i]) == false) {
            numbersinArray.push(" ")
        } else {
            numbersinArray.push(displayArray[i])
        }
    }
    return numbersinArray
}

// Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

let inputButton = document.getElementsByClassName("input")

const buttonInputs = document.querySelectorAll(".input")

buttonInputs.forEach(buttonInput => {
    buttonInput.addEventListener('click', handleClick)
});

function handleClick(e) {
    let { id } = e.target
    let arrayEnd = displayArray[displayArray.length - 1]

    if (displayArray.join('').length > 36) {
        // arr max length = 24
        return console.log("max length")
    } else if (displayArray.length == 0 && idCheck(id) == false) {
        // prevent operator at start
        return operator = ""
    } else if (idCheck(id) == false && idCheck(arrayEnd) == false) {
        return console.log("multiple operator error")
        // prevent operator after operator
    } else {
        displayArray.push(id);
        displayValue.textContent = displayArray.join('')
    }
    // console.log("array length = " + displayArray.length)
    lengthCheck(displayArray)
}

// changes display array font dependent on length
function lengthCheck(arr) {
    let a = arr.join('').length
    if (a < 18) {
        return displayValue.style["font-size"] = "xx-large"
    } else if (a > 27) {
        return displayValue.style["font-size"] = "large"
    } else if (a > 18) {
        return displayValue.style["font-size"] = "x-large"
    }
}

function idCheck(id) {
    if (id == undefined) {
        return false
    } else {
        return id.match(/^[0-9]+$/) != null
    }
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
        return solutionOutput.textContent = "ERROR!"
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
