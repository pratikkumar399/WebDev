// writing about chaining in node js

const fs = require('fs');

fs.readFile('chain.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    fs.writeFile('chain2.txt', data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('File written successfully');
    })
})