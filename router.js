var Router = require('routes');
var router = Router();

router.addRoute('/', require('./routes/index.js'));

exports = module.exports = function (req, res, next) {
    var route = router.match(req.url);

    if (!route) {
        return next();
    }

    Object.keys(route).forEach(function (k) {
        req[k] = route[k]
    });

    route.fn(req, res);
};
