function cycleFirstChar(word) {
    let result = ""
    
    for (let index = 0; index < word.length; index++) {

        let tempWord = [] 
        tempWord = word.substring(1, word.length).split("")
        tempWord.splice(index, 0, word[0])
        result += tempWord.join("") + " "
    }

    return result
}

console.log(cycleFirstChar("123")); // 123 213 321
console.log(cycleFirstChar("98765")) // 98765 89765 87965 87695 87659" 