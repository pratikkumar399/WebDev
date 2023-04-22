const router = require('express').Router();
const apiKeyMiddleware = require('../middlewares/apiKey');


// router.use(apiKeyMiddleware);
router.get('/', (req, res) => {
    res.render('index', {
        'title': 'Server Side Rendering',
    });
})

router.get('/about', (req, res) => {
    res.render('about', {
        'title': 'Rendering About Page'
    });
    // res.render(path.resolve(__dirname + '/about.html'));
})
router.get('/download', (req, res) => {
    res.download(path.resolve(__dirname) + '/views/about.ejs');
})


router.get('/api/products', apiKeyMiddleware, (req, res) => {
    res.json([
        {
            id: '123',
            name1: 'chrome1',
        },
        {
            id: '124',
            name2: 'chrome2',
        }
    ]);
})

module.exports = router;