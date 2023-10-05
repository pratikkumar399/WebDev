const express = require('express');
const path = require('path');
const app = express();
const mainRouter = require('./router/index');

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     // res.send('Hello World');
//     res.sendFile((path.resolve(__dirname, 'index.html')))
// })

// app.get('/file', (req, res) => {
//     // res.send('Hello World');
//     res.sendFile((path.resolve(__dirname, 'file.html')))
// })

// for serving static content
// app.use(express.static('public'));


// for dynamic content 

app.use(mainRouter);
// app.use('/en', mainRouter);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})
