// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was

// hello     world    my    name   is       raman


// After the program runs, the output should be

// hello world my name is raman
const fs = require("fs");

function getFileContents(path) {
    return new Promise(function (resolve) {
        fs.readFile(path, { encoding: "utf-8" }, function (err, data) {
            if (err) {
                throw new Error(err);
            } else {
                resolve(data);
            }
        });
    });
}

function createWriteFile(path, data) {
    fs.writeFile(path, data, { encoding: 'utf-8' }, () => { console.log("file cleaned successfully"); });
}

async function main() {
    const path = "01-async-js/medium/test.txt";
    let content = await getFileContents(path);
    content = content.replace(/\s\s+/g, " ");
    createWriteFile(path, content);
}

main();