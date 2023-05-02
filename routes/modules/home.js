const express = require("express");
const router = express.Router();

const Item = require("../../models/item");
const Category = require("../../models/category");

//show all
router.get("/", (req, res) => {
  Item.find({ userId: req.user._id })
    .populate("categoryId")
    .lean()
    .then((items) => res.render("index", { items }))
    .catch((err) => console.log(err));
});

//filter category;
router.get("/filter", async (req, res) => {
  const userId = req.user._id;
  const category = req.query.category;
  const filterCategory =
    category === "全部"
      ? ""
      : await Category.findOne({ name: category }).lean();
  const filter =
    filterCategory === ""
      ? { userId }
      : { userId, categoryId: filterCategory._id };
  Item.find(filter)
    .populate("categoryId")
    .lean()
    .then((items) => res.render("index", { items, category }))
    .catch((err) => console.log(err));
});

module.exports = router;
