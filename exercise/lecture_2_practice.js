function evaluateEquation(equation) {

    let result = 0
    for (let i = 1; i < equation.length; i++) {
        const operator = equation[i - 1];
        const operand = parseFloat(equation[i]);

        console.log(operand,operator);
        if (Number.isNaN(Number.parseFloat(operand)) ) {
            if (operator === "+") {
                result += operand;
            } else if (operator === "-") {
                result -= operand;
            } else if (operator === "*") {
                result *= operand;
            } else if (operator === "/") {
                result /= operand;
            }
        } else {
        }
    }

    return result;
}

// function evaluateEquation(equation) {

//     return eval(equation)
// }

console.log(evaluateEquation("1+1"));
console.log(evaluateEquation("7*4-2"));
console.log(evaluateEquation("1+1+1+1+1"));
