const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("This is a GET Request.");
});

app.get("/login", (req, res) => {
  res.send("This is Login Page with GET Request.");
  const { fullName, age } = req.query;
  console.log({ fullName, age });
});
app.post("/login", (req, res) => {
  const { fullName, age } = req.body;
  //   res.send("This is Login Page with POST Request.");
  console.log({ fullName, age });
  res.send(`It's okay ${fullName}, Still you can do it at the age of ${age}  `);
});

app.listen(3000, () => {
  console.log("Server Login:3000");
});
