const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../../models/user");

router.get("/login", (req, res) => {
  res.render("login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/users/login",
    failureFlash: "email 或密碼輸入錯誤，請再次確認！",
  })
);

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  console.log(req.body);
  let { name, email, password, confirmPassword } = req.body;

  const emailExist = await User.findOne({ email });
  if (emailExist) {
    req.flash("error_msg", "信箱已被註冊過!");
    return res.redirect("/users/register");
  }
  const newUser = new User({ name, email, password });
  try {
    const savedUser = await newUser.save();
    req.flash("success_msg", "註冊成功");
    return res.redirect("/users/login");
  } catch (error) {
    console.log(error);
  }
});

router.get("/logout", (req, res) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success_msg", "你已經成功登出了!");
    return res.redirect("/users/login");
  });
});

module.exports = router;
