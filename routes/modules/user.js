const express = require("express");
const router = express.Router();

const User = require("../../models/user");

router.get("/login", (req, res) => {
  res.render("login");
});

// router.post("/login")

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  console.log(req.body);
  let { name, email, password, confirmPassword } = req.body;
  const emailExist = await User.findOne({ email });
  if (emailExist) {
  }
});

// router.get("/logout",(req,res) =>{

// })

module.exports = router;
