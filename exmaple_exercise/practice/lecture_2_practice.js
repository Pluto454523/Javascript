function evaluateEquation2(equation) {

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

function evaluateEquation(equation) {

    let result = 0
    equation = equation.split("")
    for (let i = 0; i < equation.length; i++) {
        
        let iscalc = false
        
        if (equation[i].includes("*")) {
            result += parseFloat(equation[i-1]) * parseFloat(equation[i+1])
            iscalc = true
        } else if (equation[i].includes("/")) {
            result += parseFloat(equation[i-1]) / parseFloat(equation[i+1])
            iscalc = true
        } else if (equation[i].includes("+")) {
            result += parseFloat(equation[i-1]) + parseFloat(equation[i+1])
            iscalc = true
        } else if (equation[i].includes("-")) {
            result += parseFloat(equation[i-1]) - parseFloat(equation[i+1])
            iscalc = true
        }

        if (iscalc) {
            console.log(result, equation);
            equation.splice(i-1, 1)
            console.log(result, equation);
            equation.splice(i, 1)
            console.log(result, equation);
            equation.splice(i+1, 1)
            console.log(result, equation);
        }

    }

    return result;
}

// function evaluateEquation(equation) {

//     return eval(equation)
// }

// console.log(evaluateEquation("1+1"));
console.log(evaluateEquation2("7*4-2"));
// console.log(evaluateEquation("1+1+1+1+1"));
