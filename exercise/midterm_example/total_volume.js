function totalVlume(numArray) {

    // let result = 0
    // for (const a of numArray) {
    //     let c = 1
    //     for (const b of a) {
    //         c *= b
    //     }
    //     result += c
    // }
    // return result

    let result = 0
    numArray.map(x => {
        let a = x.map(y => y*y)
    })

}

console.log(totalVlume([[4,2,4], [3,3,3], [1,1,2], [2,1,1]]));
console.log(totalVlume([[2,2,2], [2,1,1]]));
console.log(totalVlume([[1,1,1]]));