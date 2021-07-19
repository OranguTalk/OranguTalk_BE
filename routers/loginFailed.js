const router = require("express").Router();
const controller = require("../controllers").loginFailed;

router.get("/", controller.get);

module.exports = router;