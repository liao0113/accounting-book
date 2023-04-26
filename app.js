const express = require("express");
const path = require("path");
const ejs = require("ejs");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const routes = require("./routes");
require("./config/mongoose");

const app = express();

//middleware
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Express is listening on http://localhost:${process.env.PORT}`);
});
