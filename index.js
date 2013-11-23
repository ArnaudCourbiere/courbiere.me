var config = require('./config.js');
var router = require('./router.js');
var view = require('./view.js');
var connect = require('connect');
var app = connect()
    .use(connect.favicon(config.favicon))
    .use(connect.logger(config.env))
    .use(connect.static(config.publicDir))
    .use(connect.cookieParser())
    .use(connect.bodyParser())
    .use(connect.session({ secret: config.sessionSecret }))
    .use(view({ engine: config.views.engine, root: config.views.root }))
    .use(router);

if (!module.parent) {
    require('http')
        .createServer(app)
        .listen(config.server.port, config.server.ip);
} else {
    module.exports.app = app;
}

