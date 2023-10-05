function apiKey(req, res, next) {
    const api_key = '123456';
    const user_api_key = req.query.api_key;

    if (user_api_key && (user_api_key === api_key)) {
        next();
    } else {
        res.json({
            message: 'Not Allowed'
        })
    }
}

module.exports = apiKey;