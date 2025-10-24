const toggleButton = document.getElementById("theme-toggle")

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
    console.log("toggle clicked");

})

// Add a color button new feature
const colorButton = document.createElement("button")

colorButton.textContent = "Random Color"
document.body.appendChild(colorButton)

colorButton.addEventListener("click", () => {
    document.body.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
})