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

