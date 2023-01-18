function promiseTimeout(ms) {
    return new Promise ((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function greet(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello ${name}!`);
        }, 2000);
    });
}

async function longRunningOperation(){
    //logic
    return 42;
}

async function run() {

    console.log("Start!!");

    //try to take await out and see
    const response = await greet("PLUTO")
    console.log(response);
    const response2 = await greet("KEN")
    console.log(response2);

    await promiseTimeout(2000);
    const response3 = await longRunningOperation()
    console.log(response3);

    console.log("Stop!!");
}

run();