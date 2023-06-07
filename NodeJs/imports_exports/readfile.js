const fsPromises = require('fs').promises;
const path = require('path');


// using the promises to avoid callback hell
const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, '', 'read.txt'), 'utf8');
        console.log(data);
        // syntax : fs.writeFile(path.join(__dirname, 'directoryname', 'filename ' , encoding needed when reading file)
        await fsPromises.writeFile(path.join(__dirname, '', 'write.txt'), 'Writing text');
        await fsPromises.appendFile(path.join(__dirname, '', 'write.txt'), '\nAdding more text');
        await fsPromises.rename(path.join(__dirname, '', 'write.txt'), path.join(__dirname, '', 'updatewrite.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, '', 'updatewrite.txt'), 'utf8');
        await fsPromises.unlink(path.join(__dirname, '', 'updatewrite.txt'));
        console.log(newData);
    }
    catch (err) {
        console.error(err);
    }
}

fileOps();

// fs.readFile(path.join(__dirname, '', 'read.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// fs.readFile('read.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     else console.log(data);
// })

process.on('uncaughtException', err => {
    console.log(err);
    process.exit(1);
})