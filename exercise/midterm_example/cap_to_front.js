//Move capital letters to the front
//Instruction : Create a function that moves all capital letter to the front of a word

function capToFront(str) {

    let s1 = "" , s2 = ""
    for (const s of str)
        (s.toUpperCase() === s) ? s1 += s : s2 += s;
    return s1 + s2
}

console.log( capToFront("hApPy") );
console.log( capToFront("moveMENT") );
console.log( capToFront("shOrtCAKE") );

