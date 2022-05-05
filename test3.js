/**
 * Using fs, Write into a file ./test.txt the sentence "Hello World!" in this project's root folder.
 * When the write is complete, console.log that the file was saved successfully.
 */

import fs from "fs";

fs.writeFile('./test.txt', "Hello World!", err => {
    if (err) {
        console.error(err);
    }else{
        console.log("file was saved successfully")
    }
});
