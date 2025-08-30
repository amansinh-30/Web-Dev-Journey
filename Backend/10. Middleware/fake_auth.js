const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "routes"));

app.use(morgan("tiny"));

// ============ Fake Authentication ============
const verifyPassword = (req, res, next) => {
  // check the query use the codition
  const { password } = req.query;
  if (password === "code") {
    return next();
  }
  res.send("SORRY PASSWORD REQUIRED!!");
};

app.get("/", (req, res, next) => {
  res.render("home");
});

app.get("/cars", (req, res, next) => {
  res.render("cars");
});

app.get("/secret", verifyPassword, (req, res, next) => {
  res.send(
    "MY SECRET IS: Sometimes I wear headphone in Public. So, I don't have to talk to 'Anyone'"
  );
  // res.render("cars");
});

app.use((req, res) => {
  res.status(404).send("OOPS NOT FOUND..!!");
});

// ============== Listen Port ==============
app.listen(3000, () => {
  console.log("SERVER LISTENING PORT:3000");
});
