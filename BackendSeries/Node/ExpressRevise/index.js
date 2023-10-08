require('dotenv').config();

const express = require('express');
const app = express();
const products = require('./data/data');


app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

// lets make a route for products
app.get('/api/products', (req, res) => {
    // let limit the prducts details that we are sendding to the client
    const newProdcuts = products.map((product) => {
        const { id, title, price } = product;
        return { id, title, price };
    })
    res.json(newProdcuts);
});

app.get('/api/products', (req, res) => {
    // let limit the prducts details that we are sendding to the client
    const newProdcuts = products.map((product) => {
        const { id, title, price } = product;
        return { id, title, price };
    })
    res.json(newProdcuts);
});

app.get('/api/products/:id', (req, res) => {
    // Find the product by id
    const singleProduct = products.find((product) => product.id === req.params.id);

    // If the product is found, create a new object with only the desired fields
    if (singleProduct) {
        const { id, title, price } = singleProduct;
        const responseProduct = { id, title, price };
        res.json(responseProduct);
    } else {
        // If the product is not found, return an appropriate response
        res.status(404).json({ error: 'Product not found' });
    }
});



app.all('*', (req, res) => {
    res.status(404).send('Page not found');
});

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server started oon ${process.env.PORT}`);
});