const apiKey = (req, res, next) => {
    const apikey = '1234567';
    console.log(req.query.apikey);
    const userApiKey = req.query.apikey;
    if (userApiKey && userApiKey === apikey) {
        next();
    }
    else {
        res.send("<h1>Not Authorized</h1>");
    }
}

module.exports = apiKey;
