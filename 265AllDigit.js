//Program for checking for missing digit numbers [0-9] in a string
//example: 123456789 has  missing digit is 0 
//example: 53657687691428890 is not missing any digit
//example: 1981023568910 has missing digits 4, 7


const numStr1 = "123456789";
const numStr2 = "53657687691428890";
const numStr3 = "1981023568910";


function missingDigits(numStr) {

  let Digit = [];

  for (let i = 0; i < 10; i++ ) {
    if (numStr.indexOf(i) == -1) {
      Digit.push(i)

    }
  }

  if (Digit.length > 0) {
    return numStr + " Missing Digit = " + Digit.join(", ");

  }

  return `${numStr} has no missing digits`;

}


console.log(missingDigits(numStr1));
console.log(missingDigits(numStr2));
console.log(missingDigits(numStr3));
// console.log("1981023568910 Missing Digit = 4, 7");