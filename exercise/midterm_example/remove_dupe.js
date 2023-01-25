//remove dupicale form array

function removeDupe(array) {

    array.map((x,index) =>
        array.includes(array[index+1]) ? array.pup(index) : null
    )
}

removeDupe([1,0,1,0]) // {1,0}
removeDupe(["The","Big","Cat"]) // {"The","Big","Cat"}
removeDupe(["John","Taylor","John"]) // {"John","Taylor"}