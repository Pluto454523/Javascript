class dog {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        console.log("This is " + this.name + " !");
    }

    // A static method 
    static bark() {
        console.log("Woof!");
    }
}
const myDog = new dog("Buster");
// ** Call method by Object myDog
// myDog.introduce();

// !! static method เรียกผ่าน object ไม่ได้
// myDog.bark()

// ** Call static method
// dog.bark()

// !! ใช้ไม่ได้เนื่องจาก introduce ไม่ใช่ Static Method 
// dog.introduce()