exports = module.exports = {
    env: process.env.NODE_ENV || 'dev', // use process.ENV?
    favicon: 'public/favicon.ico',
    publicDir: 'public',
    sessionSecret: 'arnaud',
    templateEngine: 'ejs',
    ip: process.env.IP || '127.0.0.1',
    port: process.env.PORT || 3131
}
