const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
]

function arrayFilterj(arr, minAge) {
    return users.filter(user => user.age >= minAge)
}

