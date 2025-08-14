const express = require("express"); // import express module
const app = express();
const path = require("path"); // import path module
const igData = require("./data.json"); // import json/database file

// calling 'ejs' files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// use 'Get Request' to show users after selecting items.
app
  .get("/", (req, res) => {
    // res.send('HELLO, BACKEND DEVELOPER. HERE, YOUR GET REQUEST!')      // use 'send' to print "string"
    res.render("home"); // get ejs file
  })
  .get("/random", (req, res) => {
    res.render("random"); // get ejs file
  });

// Create an Array and take OUTPUT in HTML
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

// To get value for each items after '/:'
app.get("/:value", (req, res) => {
  const { value } = req.params; // use 'params' to get value
  const data = igData[value]; // get data from json file

  // set condition if the data is in your json file/database
  if (data) {
    res.render("value", { ...data }); // get data file
  } else {
    res.render("notFound", { value }); // get notFound file
  }
});

// Port calling
app.listen(3000, () => {
  console.log('EXAMPLE IS LISTENING PORT: 3000');
});
