const router = require('express').Router();

router.get('/products', (req, res) => {
    res.render('products', {
        'title': 'My Products Page'
    });
})

module.exports = router;