var config = require('./config');
var templateEngine = require(config.templateEngine);

exports = module.exports = function (req, res, next) {
    req.compile = templateEngine.compile;
    req.render = templateEngine.render;

    next();
};
