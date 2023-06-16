const { logEvents } = require('./logEvents');

const errorHandler = (err, req, res, next) => {
    logEvents(`${err.message}\t${err.stack}`, 'errors.txt');
    res.status(500).send('Something went wrong');
}

module.exports = errorHandler;