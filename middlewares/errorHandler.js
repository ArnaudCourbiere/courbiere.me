exports = module.exports = function errorHandler() {
    return function errorHandler(err, req, res, next) {
        if (typeof err.status === 'number' && err.status % 1 === 0) {
            res.statusCode = err.status;
        } else {
            res.statusCode = 500;
        }
        
        var message = err.message || 'Oops';
        
        res.end(message);
    }
};
