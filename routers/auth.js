const router = require("express").Router();
const controller = require("../controllers").auth;
const passport = require('passport');

router.get("/github", passport.authenticate('github'));
router.get("/github/callback", passport.authenticate('github', { failureRedirect: '/login' }), controller.authenticate)

module.exports = router;