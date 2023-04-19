const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

// static middleware
// app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/index.html'));
    // res.end();
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/about.html'));
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
