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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "comments"));

const comments = [
  {
    username: "Jack",
    comments: "lol that is so funny",
  },
  {
    username: "Apex",
    comments: "I just need a break and travel somewhare else",
  },
  {
    username: "Amanada",
    comments: "I am going to beach this weekend",
  },
  {
    username: "Julia",
    comments: "My weekend would be hactic",
  },
];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "template.html"));
});

app.get("/comments", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  // res.render("index", { comments });
});
app.get("/submit", (req, res) => {
  console.log("GET data:", req.query);
  res.send("This is a GET REQUEST");
});
app.post("/submit", (req, res) => {
  console.log("POST data:", req.body);
  res.send("This is a POST REQUEST");
});

app.get("/comment", (req, res) => {
  res.render("index", { comments });
});

app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

app.listen(8080, () => {
  console.log("Server Login:8080");
});

// const commentBtn = document.getElementById("comment");

// const commentList = commentBtn.addEventListener("click", () => {
//   app.get("/comment", (req, res) => {
//     res.render("index", { comments });
//   });
// });

// commentList();
