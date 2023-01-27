const array = [15, 16, 17, 18 , 19 ] ;

function reducer(accumulator , currentValue , index) {
    const returns = accumulator + currentValue ;
    console.log (`accumulator : ${accumulator} , currentValue : ${currentValue} , index : ${index} , returns ${returns}`,);
    return returns;
}

// console.log(array.reduce(reducer));


//** Arrow style */
const reduceArrow = array.reduce( (accumulator , currentValue , index) => {
    const returns = accumulator + currentValue ;
    console.log (`accumulator : ${accumulator} , currentValue : ${currentValue} , index : ${index} , returns ${returns}`,);
    return returns;
})

console.log(reduceArrow);