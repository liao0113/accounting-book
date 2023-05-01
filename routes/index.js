const express = require("express");
const router = express.Router();

const { authenticator } = require("../middleware/accauth");
const home = require("./modules/home");
const user = require("./modules/user");
const item = require("./modules/item");
const auth = require("./modules/auth");
const error = require("./modules/error");

router.use("/users", user);
router.use("/auth", auth);
router.use("/items", authenticator, item);
router.use("/", authenticator, home);
router.use("*", error);

module.exports = router;
