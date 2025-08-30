const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
// app.use(morgan("common"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "routes"));

app.use(morgan("tiny"));
app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use("/cars", (req, res, next) => {
  console.log("I Love JS");
  next();
});

app.get("/", (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.render("home");
  //   res.send("This is a Home Page!!");
});

app.get("/cars", (req, res) => {
  res.render("cars");
});

// =========== write this at the end of the middleware to not throwing error when user insert something which not available on the route ===========
// =========== usually it write at the end of the file ===========
app.use((req, res) => {
  res.status(404).send("OOPS NOT FOUND..!!");
});

/*
app.get("/cars", (req, res, next) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
  res.render("cars");
  next();
});
*/

// ============== Listen Port ==============
app.listen(3000, () => {
  console.log("SERVER LISTENING PORT:3000");
});
