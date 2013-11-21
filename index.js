var config = require('./config');
var router = require('./router');
var decorator = require('./decorator');
var http = require('http');
var connect = require('connect');
var app = connect()
    .use(connect.favicon(config.favicon))
    .use(connect.logger(config.env))
    .use(connect.static(config.publicDir))
    .use(connect.cookieParser())
    .use(connect.session({ secret: config.sessionSecret }))
    .use(decorator)
    .use(router);

http.createServer(app).listen(3000);
