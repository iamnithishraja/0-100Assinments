// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require("fs");

function readFileAndPrint() {
    fs.readFile("01-async-js/easy/test.txt", { encoding: 'utf-8' }, function (err, data) {
        if (!err) {
            console.log(data);
        } else {
            console.log(err);
        }
    });
}

async function performExpensiveOperation() {
    const iterations = 1000000000;
    readFileAndPrint();
    console.log('Starting expensive operation...');
    for (let i = 0; i < iterations; i++) {
    }
    console.log('Expensive operation completed.');
}

performExpensiveOperation();

