const router = require("express").Router();
const controller = require("../controllers").rooms;
const requiredToken = require("../middlewares/requiredTokenCheck");

router.get("/getRooms", requiredToken, controller.get);

module.exports = router;