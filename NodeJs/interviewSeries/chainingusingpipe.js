const fs = require('fs');

const readStream = fs.createReadStream('chain.txt', 'utf8');
const writeStream = fs.createWriteStream('chain3.txt');

readStream.pipe(writeStream);

writeStream.on('finish', () => {
    console.log('File written successfully');
})

writeStream.on('error', (err) => {
    console.log(err);
})