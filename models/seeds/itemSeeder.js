const db = require("../../config/mongoose");

const Category = require("../category");
const User = require("../user");
const Item = require("../item");

const userSeeder = require("./user.json").users;
const itemSeeder = require("./item.json").items;

db.once("open", async () => {
  console.log("saving user !");
  for (let user of userSeeder) {
    console.log(user);
    const newUser = new User({
      name: user.name,
      email: user.email,
      password: user.password,
    });
    await newUser.save();
  }
  console.log("saving item !");
  for (let item of itemSeeder) {
    const itemUser = await User.findOne({ name: item.user }).lean();
    const itemCategory = await Category.findOne({ name: item.category }).lean();
    await Item.create({
      name: item.name,
      date: item.date,
      amount: item.amount,
      userId: itemUser._id,
      categoryId: itemCategory._id,
    });
  }
  console.log("itemSeeder created!");
  process.exit();
});
