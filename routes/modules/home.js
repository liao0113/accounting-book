const express = require("express");
const router = express.Router();

const item = require("../../models/item");
const category = require("../../models/category");

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
