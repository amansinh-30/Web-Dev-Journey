const express = require("express");
const app = express();
const path = require("path");
const igData = require("./data.json");

// import css and js file from public folder 
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app
  .get("/", (req, res) => {
    res.render("home");
  })
  .get("/random", (req, res) => {
    res.render("random");
  });

app.get("/cars", (req, res) => {
  const cars = [
    "BMW",
    "Lamborghini",
    "Aston Martin",
    "McLaren",
    "Porsche",
    "Ferrari",
  ];
  res.render("car", { cars });
});

app.get("/:value", (req, res) => {
  const { value } = req.params;
  const data = igData[value];

  if (data) {
    res.render("value", { ...data });
  } else {
    res.render("notFound", { value });
  }
});

app.listen(8080, () => {
  console.log("Server Login: 8080");
});
