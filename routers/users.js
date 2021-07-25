const router = require("express").Router();
const controller = require("../controllers").user;

router.get("/getAllUsersInfo", controller.get);

module.exports = router;