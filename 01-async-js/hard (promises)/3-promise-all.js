/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
    await Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]);
    const totalTime = Math.floor((new Date().getTime() - start) / 1000);
    console.log(`program executed for ${totalTime}s`);
}

calculateTime();