var Routes = require('routes');
var routes = Routes();

routes.addRoute('/', require('./routes/index.js'));

exports = module.exports = function router(req, res, next) {
    var route = routes.match(req.url);

    if (!route) {
        return next();
    }

    Object.keys(route).forEach(function (k) {
        req[k] = route[k];
    });

    route.fn(req, res);
};
