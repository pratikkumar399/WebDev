const fs = require('fs').promises;

fs.readFile('chain.txt', 'utf8')
    .then((data) => {
        return fs.writeFile('chain1.txt', data);
    }).then(() => {
        console.log('File written successfully')
    }).catch((err) => {
        console.log(err);
    })