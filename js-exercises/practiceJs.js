const words = ['hello', 'world', 'this', 'is', 'great']
// Sentence Smash
function smash(words) {
    if (!words) {
        return []
    }
    return words.join(" ")
}

// reverse string
function reverString(myArray) {
    return myArray.reverse().join(" ")
}

// school paperwork problem 
function paperWork(n, m) {
    if (n <= 0 || m <= 0) {
        return 0
    }
    return n * m
}

// const projects = [{ name: "bio page" }]
// const projectList = document.getElementById("project-list")

// projects.map(project => {
//     const li = document.createElement("li")
//     li.innerHTML = `<a >${project.name}</a>`
//     projectList.appendChild(li)
// })

const numbers = [1, 2, 3, 4]

const sum = numbers.reduce((acc, curr) => acc + curr, 0)
console.log(sum);
