const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
]

function arrayFilterj(arr, minAge) {
    return arr.filter(user => user.age >= minAge)
}

console.log(arrayFilterj(users, 30));


// Founding a needle in haystack 
function findNeedleInHayStack(haystack) {
    if (haystack.includes("needle")) {
        return `found needle in haystack at the position ${haystack.indexOf("needle")}`
    }
}