function setupCounter() {
    let count = 0

    const stepCounter = document.createElement("p")
    stepCounter.textContent = `Counter: ${count}`
    document.body.appendChild(stepCounter)

    const incButton = document.createElement("button")
    incButton.textContent = `Increment `
    document.body.appendChild(incButton)

    const decButton = document.createElement("button")
    decButton.textContent = `Decrement`
    document.body.appendChild(decButton)

    incButton.addEventListener("click", () => {
        count++
        stepCounter.textContent = `Count: ${count}`
    })

    decButton.addEventListener("click", () => {
        count--
        stepCounter.textContent = `Count: ${count}`
    })
}
setupCounter()

//
let itsTypeisNull = null
console.log(typeof itsTypeisNull) // it's type will object which is widely considered as a bug?