// for reading large files

const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, '', 'lorem.txt'), { encoding: 'utf8' });
const ws = fs.createWriteStream(path.join(__dirname, '', 'newlorem.txt'));

// taking in the data using the rs and putting in it new file using the ws
rs.on('data', (dataChuunk) => {
    ws.write(dataChuunk);
})

// another method to copy
rs.pipe(ws);