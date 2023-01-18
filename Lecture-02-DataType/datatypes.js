const people = ["Aaron", "Mel", "John"];
const one = 1;
const str = "Hello World";
const b = true;

const employee = {
    firstName: "Anirach",
    lastName: "Mingkhwan",
    test: function test() {
        console.log("Hello " + this.firstName + " " + this.lastName);
    }
};

function sayHello(person) {
    console.log("Hello " + person.firstName + " " + person.lastName);
}


// ** typeof เอาไว้บอกชนิดตัวแปร **
// console.log(typeof people);
// console.log(typeof sayHello)
// console.log(typeof employee) 
// console.log(typeof employee.test) 

// ** instanceof เอาไว้เช็ค type ตัวแปร **
console.log(employee instanceof Object);
console.log(employee instanceof Array);

// sayHello(employee);
// employee.test();
