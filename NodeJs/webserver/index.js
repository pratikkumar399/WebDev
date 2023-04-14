const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('public/data.json', 'utf-8'));
const products = data.products;

const server = express();
server.use(express.json());
server.use(morgan('dev'));
server.use(express.static('public'));


// api- endpoint - route
// get is the type of request
server.get('/products', (req, res) => {
    res.json(products);
})
server.get('/products/:id', (req, res) => {
    // console.log(req.params.id);
    const id = +req.params.id;
    const product = products.find(p => p.id === id)
    res.json(product);
})
server.post('/', (req, res) => {
    res.send("Post");
})
server.put('/', (req, res) => {
    res.send("Put");
})
server.delete('/', (req, res) => {
    res.send("Delete");
})
server.patch('/', (req, res) => {
    res.send("Patch");
})

server.listen(8080);