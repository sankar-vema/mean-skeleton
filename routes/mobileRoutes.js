var auth = require('./auth.js');

module.exports = function(app, passport) {

    // show welcome screen
    app.get('/m/welcome', auth.isLoggedIn, function(req, res) {
        res.locals.pageTitle = "Welcome to CSC";
        res.render('mobile/welcome.ejs', {
            layout: 'layouts/mobile'
        });
    });

}