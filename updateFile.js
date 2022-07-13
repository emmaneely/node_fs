const fs = require("fs");

let appendContents = "\nHello, World!".repeat(100);

fs.appendFile("./HelloWorld.txt", appendContents, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Successfully updated file.");
    }
});