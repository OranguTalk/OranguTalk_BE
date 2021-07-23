const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy;
require("dotenv").config();

module.exports = () => {
    passport.use('github', new GithubStrategy({
        clientID: process.env['clientID'],
        clientSecret: process.env['clientSecret'],
        callbackURL: process.env['callbackURL']
    },
    function(accessToken, refreshToken, profile, done) {
        done(null, profile);
    }));
}