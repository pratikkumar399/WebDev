const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {

    if (req.url == '/') {
        res.write('Hello World');
        res.end();
    }
    else if (req.url == '/about') {
        res.write('About Page');
        res.end();
    }
    else if (req.url == '/contact') {
        res.write('Contact Page');
        res.end();
    }
    else if (req.url == '/userapi') {
        fs.readFile(`${__dirname}/userapi/userapi.json`, 'utf-8', (err, data) => {
            // console.log(data);
            // const objData = JSON.parse(data);
            // res.end(objData[0].username);
            res.writeHead(200, { 'Content-type': 'application/json' });
            res.end(data);
        });
    }
    else {
        res.write('404 Page Not Found');
        res.end();
    }

});

server.listen(3000, () => {
    console.log("Server started at port 3000");
});