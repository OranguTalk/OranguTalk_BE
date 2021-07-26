const router = require("express").Router();
const controller = require("../controllers").usersInRoom;

router.get("/getUserListInRoom", controller.get);

module.exports = router;