exports = module.exports = function (options) {
    options = options || {};
    var engine = require(options.engine || 'ejs').__express;
    var root = options.root || process.cwd() + '/views';
    
    return function view(req, res, next) {
        res.render = function (path, options, fn) {
            options = options || {};
            
            engine(root + '/' + path, options, function renderView(err, str) {
                if (err === undefined || err === null) {
                    res.end(str);
                } else {
                    throw err;
                }
            });
        };
    
        next();
    };
}