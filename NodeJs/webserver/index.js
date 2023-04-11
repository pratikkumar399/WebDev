const http = require('http');
const fs = require('fs');
const express = require('express');

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const server = express();


// api- endpoint - route 
// get is the type of request 
server.get('/', (req, res) => {
    res.send("Get");
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