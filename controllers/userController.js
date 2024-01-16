const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.sign_up_get = asyncHandler(async (req, res, next) => {
  res.render("new_user", { title: "Sign Up" });
});

exports.sign_up_post = asyncHandler(async (req, res, next) => {
  try {
    const user = new User({
      username: req.body.email,
      password: req.body.pwd,
      first_name: req.body.last_name,
      last_name: req.body.first_name,
      membership_status: false,
    });
    const result = await user.save();
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
});
