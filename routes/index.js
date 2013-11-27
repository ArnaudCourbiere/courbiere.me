exports = module.exports = function (req, res, next) {
    //throw { status: 404, message: 'Page not found.' };
    res.render('index.html');
};
