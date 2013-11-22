exports = module.exports = {
    env: process.env.NODE_ENV || 'dev',
    favicon: 'public/favicon.ico',
    publicDir: 'public',
    sessionSecret: 'arnaud',
    views: {
        engine: 'ejs',
        root: __dirname + '/views'
    },
    server: {
        ip: process.env.IP || '127.0.0.1',
        port: process.env.PORT || 3131
    }
}
