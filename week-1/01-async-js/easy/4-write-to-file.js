// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require("fs");

function createWriteFile(data) {
    fs.writeFile("01-async-js/easy/copy.txt", data, { encoding: 'utf-8' }, () => { console.log("file created"); })
}

function copyFile() {
    fs.readFile("01-async-js/easy/test.txt", { encoding: 'utf-8' }, function (err, data) {
        if (!err) {
            createWriteFile(data);
        } else {
            console.log(err);
        }
    });
}

copyFile();