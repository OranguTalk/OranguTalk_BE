const router = require("express").Router();
const userInfoController = require("../controllers").usersInRoom;
const roomChatController = require("../controllers").chatList;

router.get("/getUserListInRoom", userInfoController.get);
router.get("/chatList", roomChatController.get);

module.exports = router;