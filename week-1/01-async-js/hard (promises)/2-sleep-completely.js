/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function delay(milliseconds) {
    const start = new Date().getTime();
    while (true && new Date().getTime() - start < milliseconds) { }
}

console.log("Start");
delay(3000);
console.log("End");
