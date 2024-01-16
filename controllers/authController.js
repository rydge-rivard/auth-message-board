const passport = require("passport");
const asyncHandler = require("express-async-handler");

exports.sign_in_get = asyncHandler(async (req, res, next) => {
  res.render("sign_in", { title: "Sign In" });
});

exports.sign_in_post =
  ("/auth",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth",
  }));
