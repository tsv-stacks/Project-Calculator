let displayArray = []
let oneButton = Array.from(document.getElementsByClassName("test"))
console.log(oneButton)

// oneButton.addEventListener("click", function onClick(event) {
//     const myValue = event.target.getAttribute("id")
//     displayArray.push(myValue)
//     console.log(displayArray)

// }
// );

oneButton.map(btn => {
    btn.addEventListener("click", function onClick(event) {
        const myValue = event.target.getAttribute("id")
        displayArray.push(myValue)
        console.log(displayArray)
    }
    );
})

console.log(displayArray)
