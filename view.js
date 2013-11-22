exports = module.exports = function (options) {
    options = options || {};
    var engine = options.engine || 'ejs';
    var root = options.root || process.cwd() + '/views';
    
    return function (req, res, next) {
        res.render = function (path, options, fn) {
            engine(path, options, function (err, str) {
                if (err) {
                    // TODO
                }
                
                res.send(str);
            });
        };
    
        next();
    };
}