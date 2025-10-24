const words = ['hello', 'world', 'this', 'is', 'great']
// Sentence Smash
function smash(words) {
    if (!words) {
        return []
    }
    return words.join(" ")
}

