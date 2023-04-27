const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on("error", () => {
  console.log("error!");
});

db.once("open", () => {
  console.log("MongoDb atlas connected");
});
