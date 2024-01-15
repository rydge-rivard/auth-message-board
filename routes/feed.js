const express = require("express");
const router = express.Router();
const message_controller = require("../controllers/messageController");

router.get("/", message_controller.index);
router.get("/sign_up", message_controller.sign_up);

module.exports = router;
