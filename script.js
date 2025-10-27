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

//Adding projects to project list
const projects = [
    { name: "Bio Page", description: "A responsive personal page", link: "#" },
    { name: "Task Manager", description: "In progress", link: "#" }
]

const projectList = document.getElementById("project-list")
projects.map(project => {
    const li = document.createElement("li")
    li.innerHTML = `<a href=${project.link}>${project.name}</a>: ${project.description}`
    projectList.appendChild(li)
})
