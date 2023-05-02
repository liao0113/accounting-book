const express = require("express");
const router = express.Router();

const Item = require("../../models/item");
const Category = require("../../models/category");

router.get("/new", (req, res) => {
  res.render("new");
});
//create a item
router.post("/", async (req, res) => {
  const categoryObj = await Category.findOne({
    name: req.body.category,
  }).lean();
  const newItem = new Item({
    ...req.body,
    categoryId: categoryObj._id,
    userId: req.user._id,
  });
  try {
    await newItem.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id/edit", (req, res) => {
  Item.findOne({ _id: req.params.id, userId: req.user._id })
    .populate("categoryId")
    .lean()
    .then((item) => res.render("edit", { item }))
    .catch((err) => console.log(err));
});

router.put("/:id", async (req, res) => {
  const categoryObj = await Category.findOne({
    name: req.body.category,
  }).lean();
  return Item.findOneAndUpdate(
    { _id: req.params.id, userId: req.user._id },
    { $set: req.body, categoryId: categoryObj._id },
    { new: true }
  )
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

router.delete("/:id", (req, res) => {
  return Item.findOneAndDelete({
    _id: req.params.id,
    userId: req.user._id,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

module.exports = router;
