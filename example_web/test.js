let word = "Cherry"
let totalAscii = 0
for(let i = 0; i < word.length; i++){
    let code = word.charCodeAt(i);
    totalAscii += code
}
console.log(`${totalAscii}`);