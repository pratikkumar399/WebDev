const router = require('express').Router();
const apiMiddleware = require('../middleware/apiKey');

// router level middleware
// router.use(apiMiddleware);


router.get('/', (req, res) => {
    // res.send('Hello World');
    res.render('index', {
        title: 'Home Page Ejs'
    });
})


router.get('/file', (req, res) => {
    // res.send('Hello World');
    res.render('file', {
        title: 'About Page Ejs'
    });
})


router.get('/download', (req, res) => {
    // res.send('Hello World');
    res.download((path.resolve(__dirname, 'public/file.html')))
});


router.get('/api/products', apiMiddleware, (req, res) => {
    // res.send('Hello World');
    res.json([
        {
            id: 1,
            name: 'Samsung'
        },
        {
            id: 2,
            name: 'Apple'
        },
        {
            id: 3,
            name: 'Nokia'
        }
    ])
})


module.exports = router;