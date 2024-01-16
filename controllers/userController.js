const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

exports.sign_up_get = asyncHandler(async (req, res, next) => {
  res.render("new_user", { title: "Sign Up" });
});

exports.sign_up_post = [
  body("first_name", "First Name must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("last_name", "Last Name must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("email", "Must be a valid email address empty.").isEmail().escape(),
  body("pwd", "Your password must be at least five characters.")
    .trim()
    .isLength({ min: 5 })
    .escape(),
  body("pwd_confirm", "Your password does not match.").custom(
    (value, { req }) => {
      return value === req.body.pwd;
    }
  ),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const hashedPwd = await bcrypt.hash(req.body.pwd, 10);
    const user = new User({
      username: req.body.email,
      password: hashedPwd,
      first_name: req.body.last_name,
      last_name: req.body.first_name,
      membership_status: false,
    });

    if (!errors.isEmpty()) {
      res.render("new_user", {
        title: "Create User",
        errors: errors.array(),
        user: user,
      });
    } else {
      const result = await user.save();
      res.redirect("/");
    }
  }),
];
