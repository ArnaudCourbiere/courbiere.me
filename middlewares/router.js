var Routes = require('routes');
var routes = Routes();
var routeDir = process.cwd() + '/routes/';

routes.addRoute('/', require(routeDir + 'index.js'));

exports = module.exports = function router() {
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
