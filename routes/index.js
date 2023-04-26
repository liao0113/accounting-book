const express = require("express");
const router = express.Router();

const home = require("./modules/home");
const user = require("./modules/user");
const item = require("./modules/item");
const auth = require("./modules/auth");
const error = require("./modules/error");

router.use("/", home);
router.use("/users", user);
router.use("/items", item);
router.use("/auth", auth);
router.use("*", error);

module.exports = router;
