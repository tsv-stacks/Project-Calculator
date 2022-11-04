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

// oneButton.addEventListener("click", () =>
//     displayArray.push(1)
// );

// inputButton.addEventListener("click", addinput)

// set new class input add event listener for anthing with input clicked use .textcontent to output
// function addinput() {
//     displayArray.push(inputButton.textContent)
// }

function handleClick(e) {
    let { id } = e.target
    console.log("id getting push = " + id)
    displayArray.push(id)
    displayValue.textContent = displayArray.join('')

    console.log(displayArray)
    console.log("array end = " + displayArray[displayArray.length - 1])
}

// else {
//     console.log("id getting push = " + id)
//     console.log(idCheck(id))
//     displayArray.push(id)
//     displayValue.textContent = displayArray.join('')

//     console.log(displayArray)
//     console.log("array end = " + displayArray[displayArray.length - 1])
// }


lengthCheck(displayArray)

function lengthCheck(arr) {
    if (arr.length > 14) {
        let textSize = document.createElement('div11')
        textSize.style["font-size"] = "large"
    }
}
