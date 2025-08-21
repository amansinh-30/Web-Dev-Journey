const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "comments"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "template.html"));
});

// for loging inputs
app
  .get("/submit", (req, res) => {
    res.send("Hello Coder's, This is a GET REQUEST. ");
  })
  .post("/submit", (req, res) => {
    res.send("Hello Coder's, This is a POST REQUEST. ");
  });

// ======= For comment button =======

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

app
  .get("/comment", (req, res) => {
    res.render("index", { comments });
  })
  .get("/comment/new", (req, res) => {
    res.render("new");
  });

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.send("YOUR NEW COMMENT ADDED SUCCESSFULLY!!");
});

app.listen(8080, () => {
  console.log("Server Login:8080");
});
