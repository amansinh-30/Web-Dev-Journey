const express = require("express");
const app = express();
const path = require("path");
const igData = require("./data.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app
  .get("/", (req, res) => {
    res.render("home");
  })
  .get("/random", (req, res) => {
    res.render("random");
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
