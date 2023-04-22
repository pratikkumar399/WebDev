const express = require('express');
const path = require('path');

const app = express();
const mainRouter = require('./routes/index.js');
const productsRouter = require('./routes/products.js');
const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');
// console.log(app.get('view engine'))
// static middleware
app.use(express.static('public'));
app.use(productsRouter);
app.use(mainRouter);


app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
