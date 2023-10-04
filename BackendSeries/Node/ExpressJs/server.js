const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     // res.send('Hello World');
//     res.sendFile((path.resolve(__dirname, 'index.html')))
// })

// app.get('/file', (req, res) => {
//     // res.send('Hello World');
//     res.sendFile((path.resolve(__dirname, 'file.html')))
// })

// for serving static content
app.use(express.static('public'));

app.get('/download', (req, res) => {
    // res.send('Hello World');
    res.download((path.resolve(__dirname, 'public/file.html')))
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})
