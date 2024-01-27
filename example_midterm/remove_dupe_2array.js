const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const difference = array1.filter(x => array2.indexOf(x) === -1);
console.log(difference); // [1, 2]
