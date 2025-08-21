/*
GET /comments - list all comments
POST /comments - Create a new comment
GET /comments/:id - Get one comment (using ID)
PATCH /comments/:id - Update one commnet
DELETE / comments/:id - Distroy one comment
*/

const express = require("express");
const app = express();
const path = require("path");

// get html files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// get ejs files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "comments"));

// create an Array
const comments = [
  {
    username: "Jack",
    comment: "lol that is so funny",
  },
  {
    username: "Apex",
    comment: "I just need a break and travel somewhare else",
  },
  {
    username: "Amanada",
    comment: "I am going to beach this weekend",
  },
  {
    username: "Julia",
    comment: "My weekend would be hactic",
  },
];

// for home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "template.html"));
});

// submit request for 'GET REQUEST'
app.get("/submit", (req, res) => {
  console.log("GET data:", req.query);
  res.send("This is a GET REQUEST");
});
// submit request for 'POST REQUEST'
app.post("/submit", (req, res) => {
  console.log("POST data:", req.body);
  res.send("This is a POST REQUEST");
});

// Get comment input from Array
app.get("/comment", (req, res) => {
  res.render("index", { comments });
});

// Get new comment data from new ejs file
app.get("/comment/new", (req, res) => {
  res.render("new");
});

// Get new comment data with 'POST REQUEST'
app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  // res.send("YES, IT SUBMITTED!");
  res.redirect("/comment"); // use "res.redirect('location')" to go to that page.
});

// if error found "404"
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

app.listen(8080, () => {
  console.log("Server Login:8080");
});
