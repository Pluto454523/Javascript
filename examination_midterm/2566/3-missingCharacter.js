function missingCharacter(str) {

    str = str.toLowerCase().split("")
    const characters = "abcdefghijklmnopqrstuvwxyz"
    let indexChar
    let result = ""

    for (let i = 0; i < characters.length; i++) {
        if (str[0] == characters[i]) {
            indexChar = i
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === characters[indexChar]) {
            indexChar++
        } else {
            result += characters[indexChar]
            if ( str[i] === characters[indexChar+1] ) {
                indexChar++
            }
            indexChar++
        }
    }

    //? ถ้า result ไม่มีค่า หรือเป็น "" จะ return "no missing letter"
    return result || "no missing letter"

}


console.log(missingCharacter("abceg")); // df
console.log(missingCharacter("opqrstuv")); // no missing letter
console.log(missingCharacter("ACde")); // b
console.log(missingCharacter("suvwXyz")); // t 