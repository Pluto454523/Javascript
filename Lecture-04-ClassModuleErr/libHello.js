// Libhello.js
const person = {
    name: 'Nawin',
    weight: 75
}

function sayHello() {
    console.log("Hello World!");
}

function cube(x) {
    return x * x * x;
}

const add = (a, b) => a + b;
const Status = true;

module.exports = { person, sayHello, cube, add, Status }