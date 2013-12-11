var Routes = require('routes');
var routes = Routes();

exports = module.exports = function router(options) {
    options = options || {};
    
    if (!"routeDir" in options || options.routeDir === undefined) {
        throw {};
    }
    
    routes.addRoute('/', require(options.routeDir + 'index.js'));
    
    return function router(req, res, next) {
        var route = routes.match(req.url);
    
        if (!route) {
            return next();
        }
    
        Object.keys(route).forEach(function (k) {
            req[k] = route[k];
        });
    
        route.fn(req, res, next);
    }
};
