//number split by matt in javascript
//Problem : Give a number, return an array containing the two halves of the number. 
//if the number is add, make rightmost number highter

//output numberSplit(4) = {2, 2}
//output numberSplit(10) = {5, 5}
//output numberSplit(11) = {5, 6}
//output numberSplit(-9) = {-5 , -4}

function numberSplit(num) {
    
    let lowNum = Math.floor(num / 2);
    let highNum = num - lowNum;
    let output = [];
    output.push(lowNum, highNum);

    return output;
}

console.log(numberSplit(4)); // Output: [2, 2]
console.log(numberSplit(10)); // Output: [5, 5]
console.log(numberSplit(11)); // Output: [5, 6]
console.log(numberSplit(-9)); // Output: [-5, -4]
