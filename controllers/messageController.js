const Message = require("../models/message");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.index = asyncHandler(async (req, res, next) => {
  const messages = await Message.find()
    .sort({ time: -1 })
    .populate("user")
    .exec();

  res.render("index", {
    title: "Secret Message Board",
    user: req.user,
    messages: messages,
  });
});

exports.create_message_get = asyncHandler(async (req, res, next) => {
  res.render("message_form", { title: "New Message", user: req.user });
});

exports.create_message_post = [
  body("title", "Title must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("msg", "Message must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const msg = new Message({
      title: req.body.title,
      time: Date(),
      content: req.body.msg,
      user: req.user._id,
    });

    if (!errors.isEmpty()) {
      res.render("message_form", {
        title: "Create Message",
        errors: errors.array(),
        msg: msg,
      });
    } else {
      const result = await msg.save();
      res.redirect("/");
    }
  }),
];
