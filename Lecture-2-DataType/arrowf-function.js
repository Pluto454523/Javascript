const sum = (firstParam, SecondParam) => {
    return firstParam + SecondParam;
}

console.log( sum(2,5) ); //7

// Arrow function with no agurment
const printHello = () => {
    console.log('Hello');
}
printHello(); //Prints: Hello

//arrow Function with a single arugment
const checkWeight = (weight) => {
    console.log(`Baggage weight : ${weight} kilograms.`);
}
checkWeight(25)

//Concise arrow function 
const multiply = (a,b) => a*b;
console.log(multiply(2,30) ); // 60