const lib = require("./lib.js")
// import { sum } from "./lib.js"
const fs = require('fs');


// the first argument is error , thats why we are writing err
fs.readFile('demo.txt', 'utf8', (err, txt) => {
    console.log(txt);
});