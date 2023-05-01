const express = require("express");
const router = express.Router();

const Item = require("../../models/item");
const Category = require("../../models/category");

//show all
router.get("/", async (req, res) => {
  const items = await Item.find({}).populate().lean();
  res.render("index", { items });
});

//filter
router.get("/filter", async (req, res) => {
  const filterItem = await Item.find({}).populate().lean();
  res.render("index", { filterItem });
});

module.exports = router;
