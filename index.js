var config = require('./config.js');
var view = require('./middlewares/view.js');
var router = require('./middlewares/router.js');
var errorHandler = require('./middlewares/errorHandler.js');
var connect = require('connect');
var app = connect()
    .use(connect.favicon(config.favicon))
    .use(connect.logger(config.env))
    .use(connect.responseTime())
    //.use(connect.staticCache())
    .use(connect.compress())
    .use(connect.static(config.publicDir))
    .use(connect.cookieParser())
    .use(connect.urlencoded())
    .use(connect.json())
    .use(connect.session({ secret: config.sessionSecret }))
    .use(view({ engine: config.views.engine, root: config.views.root }))
    .use(router())
    .use(errorHandler());

if (!module.parent) {
    require('http')
        .createServer(app)
        .listen(config.server.port, config.server.ip);
} else {
    module.exports.app = app;
}

