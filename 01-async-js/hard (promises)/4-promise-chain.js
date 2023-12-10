/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("resolved"), 1000);
    });
}

function waitTwoSecond() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("resolved"), 2000);
    });
}

function waitThreeSecond() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("resolved"), 3000);
    });
}

async function calculateTime() {
    const start = new Date().getTime();
    console.log("start");
    await waitOneSecond();
    await waitTwoSecond();
    await waitThreeSecond();
    // in last case all 3 fuctions were running on different threds so it was max(p1,p2,p3)=3s
    // in this case 3 fuctions run one after the other so it will be sum(p1,p2,p3)=6s
    const totalTime = Math.floor((new Date().getTime() - start) / 1000);
    console.log(`program executed for ${totalTime}s`);
}
calculateTime();