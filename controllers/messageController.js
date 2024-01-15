const Message = require("../models/message");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.index = asyncHandler(async (req, res, next) => {
  res.render("index", { title: "Secret Message Board" });
});

exports.sign_up = asyncHandler(async (req, res, next) => {
  res.render("new_user", { title: "Sign Up" });
});
