const express = require("express");
const router = express.Router();
const message_controller = require("../controllers/messageController");
const user_controller = require("../controllers/userController");

router.get("/", message_controller.index);
router.get("/create_message", message_controller.create_message_get);
router.post("/create_message", message_controller.create_message_post);
router.get("/:id/delete", message_controller.delete_message_get);
router.post("/:id/delete", message_controller.delete_message_post);

router.get("/sign_up", user_controller.sign_up_get);
router.post("/sign_up", user_controller.sign_up_post);
router.get("/join", user_controller.join_get);
router.post("/join", user_controller.join_post);

module.exports = router;
