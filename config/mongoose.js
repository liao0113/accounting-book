const mongoose = require("mongoose");
console.log(process.env.MONGODB_URI);
mongoose.connect(
  "mongodb+srv://asd6991213:kkboxedison@cluster0.lcwiy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

const db = mongoose.connection;

db.on("error", () => {
  console.log("error!");
});
//一旦資料庫狀態為"open"，執行
db.once("open", () => {
  console.log("MongoDb atlas connected");
});

module.exports = db;
