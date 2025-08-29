// =============== Exporting Modules ===============
const express = require("express");
const app = express();
const path = require("path");
const Campground = require("./models/campground");

// =============== Connecting with Database ===============
const mongoose = require("mongoose");
const campground = require("./models/campground");
// mongodb://server port/'database name'
mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// check there is an error or not
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected!!");
});

// =============== Get 'ejs' Templates ===============
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// =============== 'Home Page' for "get request" ===============
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/campground", async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
});

app.get("/campground/:id", async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  res.render("show", { campground });
});

/*
app.get("/makecampground", async (req, res) => {
  const camp = new Campground({
    title: "My Backyard",
    description: "Cheap Camping!!",
  });
  await camp.save();
  res.send(camp);
});
*/

app.listen(3000, () => {
  console.log("Server Login Port:3000");
});
