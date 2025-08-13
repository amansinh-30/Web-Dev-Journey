const express = require("express");
const app = express();
const path = require("path");

// calling 'ejs' files
app.set("view engine", "ejs");
app.set("views", [
  path.join(__dirname, "practice"),
  path.join(__dirname, "/views"),
]);

// use 'Get Request' to show users after selecting items.
app
  .get("/", (req, res) => {
    // res.send('HELLO, BACKEND DEVELOPER. HERE, YOUR GET REQUEST!')      // use 'send' to print "string"
    res.render("home"); // get ejs file
  })
  .get("/random", (req, res) => {
    res.render("random"); // get ejs file
  });

// To get value for each items after '/:'
app.get("/:values", (req, res) => {
  const values = req.params; // use 'params' to get value
  res.render("value", values); // get ejs file
});

// Port calling
app.listen(3000, () => {
  console.log(`EXAMPLE IS LISTENING PORT: 3000`);
});
