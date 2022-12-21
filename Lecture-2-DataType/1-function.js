//** 1 Function Definition */
function printHello(name) {
    console.log('Hello' + name);
    return name + 'Hello!';
}

console.log(printHello.name);

//** 2 Function Invocation */
let result = printHello("Anirach !")
console.log(result);