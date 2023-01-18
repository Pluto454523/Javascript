function reversedString(value){

    let reversedValue= "";
    
    // ** value.split("") จะได้เป็น array obj
    // ** forEach method executes a provided function once for each array element.
    // let arr = value.split("")
    // arr.forEach((char) => {
    //     reversedValue = char + reversedValue;
    // })

    // value.split("").forEach((char) => {
    //     reversedValue = char + reversedValue;
    // })

    // ** วิธีเขียนอีกวิธี
    reversedValue = value.split('').reverse().join('')
    return reversedValue;
}

console.log(reversedString("Reverse Me"));
console.log(reversedString("Hello JavaScript"));