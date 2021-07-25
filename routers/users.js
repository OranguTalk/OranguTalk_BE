const router = require("express").Router();
const controller = require("../controllers").users;

router.get("/getAllUsersInfo", controller.get);

module.exports = router;