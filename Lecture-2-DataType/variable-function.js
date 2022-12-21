let plusFive = (number) => {
    return number + 5;
}

//** f is assigned the vaule of plusFive */
let f = plusFive

console.log(typeof plusFive(3) ); //number
console.log(plusFive(3) ); //8

// Since f has a function value, it can be invoked
console.log(typeof f(9) ); //number
console.log( f(9) ); //14