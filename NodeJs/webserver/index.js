const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
const product = data.products[0];

const age = {
    data: 5
}

const server = http.createServer((req, res) => {
    console.log("Server Started");
    switch (req.url) {
        case '/':
            res.setHeader('Content-Type', 'text/html');
            res.end(index);
            break;
        case '/api':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
            break;
        case '/product':
            res.setHeader('Content-Type', 'text/html');
            let modifiedIndex = index.replace('**title**', product.title)
                .replace('**url**', product.thumbnail)
                .replace('**price**', product.price)
                .replace('**rating**', product.rating)
            res.end(modifiedIndex);
        default:
            res.writeHead(404);
            res.end();

    }
})

server.listen(8080);










// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.json());

// const sayHi = (req, res) => {
//   res.send("Hi!");
// };

// app.get("/", sayHi);

// app.post("/add", (req, res) => {
//   const { a, b } = req.body;
//   res.send(`The sum is: ${a + b}`);
// });

// app.listen(5000, () => {
//   console.log(`Server is running on port 5000.`);
// });