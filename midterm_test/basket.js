function calProductPrice(obj) {

    // console.log(obj.customer);
    // console.log(obj.items);
    let totalPrice = 0
    let totalDiscount = 0
    let finalPrice = 0
    for (const item of obj.items) {
        totalPrice += item.price
        totalDiscount += totalPrice*item.discount
    }

    finalPrice += totalPrice-totalDiscount

    console.log(`${obj.customer} 
    TotalPrice = ${totalPrice}
    TotalDiscount = ${totalDiscount}
    fianalPrice = ${finalPrice}
    `);
}

basket1 = {
    customer: "Peter", 
    items: [
        {name: "Bread", price: 45, discount: 0.1},
        {name: "Bread1", price: 30, discount: 0.2},
        {name: "Bread2", price: 40, discount: 0.3}
    ]
}

calProductPrice(basket1)