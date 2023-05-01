const db = require("../../config/mongoose");

const Category = require("../category");
const categorySeeder = require("./category.json").categories;

db.once("open", async () => {
  console.log("saving category!");
  console.log(categorySeeder);
  for (let category of categorySeeder) {
    console.log(category);
    await Category.create(category);
  }
  console.log("categorySeeder created.");
  process.exit();
});
