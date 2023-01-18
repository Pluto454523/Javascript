function practice1() {
    let vaule1 = ['Apple', 1 , false]
    let vaule2 = ['Fries', 2 , true]
    let vaule3 = ['Mars', 9 , 'Apple']

    let sumArray = vaule1.concat(vaule2.concat(vaule3)) 

    for (let i = 0; i < sumArray.length; i++) 
        for (let j = i+1; j < sumArray.length; j++)
            if (sumArray[i] === sumArray[j])
                console.log(sumArray[i] + " === " + sumArray[j]);

}

function practice2() {

    let furniture = ['Table', 'Chairs', 'Couch']

    for (let nameFurniture of furniture)
        for (const char of nameFurniture)
            console.log(char);
        console.log("\n");
    
}

// practice1()
practice2()