const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on("error", () => {
  console.log("error!");
});
//一旦資料庫狀態為"open"，執行
db.once("open", () => {
  console.log("MongoDb atlas connected");
});

module.exports = db;
