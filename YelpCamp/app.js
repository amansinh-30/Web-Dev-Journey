// =============== Import Modules ===============
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
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

// =============== Get "ejs" Templates ===============
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// use middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
// =============== "Home Page" ===============
app.get("/", (req, res) => {
  res.render("home");
});

// =============== "campground page" ===============
app.get("/campground", async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
});

// =============== "add campground page" ===============
app.get("/campground/new", async (req, res) => {
  res.render("campgrounds/new");
});

app.post("/campground", async (req, res) => {
  const campground = new Campground(req.body.campground);
  await campground.save();
  res.redirect(`/campground/${campground._id}`);
});

// =============== "campground each place location" ===============
app.get("/campground/:id", async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  res.render("show", { campground });
});

// =============== "edit campground each place location" ===============
app.get("/campground/:id/edit", async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  res.render("campgrounds/edit", { campground });
});

app.put("/campground/:id", async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  }); // Spread Operator
  res.redirect(`/campground/${campground._id}`);
});

app.delete("/campground/:id", async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  res.redirect("/campground");
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

// =============== Listen Port ===============
app.listen(3000, () => {
  console.log("Server Login Port:3000");
});
