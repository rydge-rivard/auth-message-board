const express = require("express");
const router = express.Router();
const message_controller = require("../controllers/messageController");
const user_controller = require("../controllers/userController");

router.get("/", message_controller.index);

router.get("/sign_up", user_controller.sign_up_get);
router.post("/sign_up", user_controller.sign_up_post);

module.exports = router;
