const fs = require('fs');

// fs.writeFileSync('read.txt', "Learning node js");
// fs.appendFileSync('read.txt', " Adding more data");
const buffer_data = fs.readFileSync('read.txt');
org_data = buffer_data.toString();
console.log(org_data);

// fs.renameSync('renamed.txt', 'read.txt');

// do encoding of characters