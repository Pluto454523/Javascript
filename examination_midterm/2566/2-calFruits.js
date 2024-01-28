function calFruits(basket) {
    let totalQuantity = 0
    let mostFruit = {name: "", quantity: 0}

    for (const fruit of basket.items) {
        if (fruit.quantity > 3) {
            totalQuantity += fruit.quantity
            if (fruit.quantity > mostFruit.quantity) {
                mostFruit = fruit
            }
        }
    }

    return `most fruit '${mostFruit.name}' quanlity ${mostFruit.quantity}\nall fruit`
}


basket1 = {
    items: [
        {name: "Apple", quantity: 2},
        {name: "Banana", quantity: 1},
        {name: "Orange", quantity: 6},
        {name: "Mango", quantity: 4},
        {name: "PineApple", quantity: 4}
    ]
}

console.log(calFruits(basket1));