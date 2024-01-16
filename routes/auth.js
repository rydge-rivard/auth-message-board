const express = require("express");
const router = express.Router();
const auth_controller = require("../controllers/authController");

router.get("/", auth_controller.sign_in_get);
router.post("/", auth_controller.sign_in_post);

module.exports = router;
