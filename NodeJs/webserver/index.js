const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('public/data.json', 'utf-8'));
const products = data.products;


const express = require('express');
const morgan = require('morgan');
const server = express();


//bodyParser
server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));


// api- endpoint - route



// create POST /products
server.post('/products', (req, res) => {
    console.log(req.body);
    products.push(req.body)
    res.status(201).json(req.body);
})

// get is the type of request
// api root , base Url/prdoucts

//Read GET /products 
server.get('/products', (req, res) => {
    res.json(products);
})
server.get('/products/:id', (req, res) => {
    // console.log(req.params.id);
    const id = +req.params.id;
    const product = products.find(p => p.id === id)
    res.json(product);
})




server.put('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    products.splice(productIndex, 1, { ...req.body, id: id });
    res.status(201).json();
})

// update same as patch, but doesn't override the existing data as in the put request,it just updates the change in data 
server.patch('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    const product = products[productIndex];
    products.splice(productIndex, 1, { ...product, ...req.body });
    res.status(201).json();
})

server.delete('/products/:id', (req, res) => {
    const id = +req.params.id;
    const prductsIndex = products.findIndex(p => p.id === id);
    const product = products[prductsIndex];
    products.splice(prductsIndex, 1);
    res.status(201).json(product);
})
server.listen(8080);