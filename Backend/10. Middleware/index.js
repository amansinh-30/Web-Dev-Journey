const express = require("express");
const app = express();
const morgan = require("morgan");

// ============== use morgan moudle ==============
// app.use(morgan("tiny"));
// app.use((req, res) => {
//   res.send("HIJACKED THIS APP HOME PAGE!");
// });

// ============== use middleware ==============
app.use(morgan("common"));
// using next is a callback argument to middleware function
// app.use('HTTP request argument', 'HTTP response argument', 'call bakck to 'next()' Middleware Function')
app.use((req, res, next) => {
  console.log("THIS IS THE FIRST MIDDLEWARE");
  return next(); // Good thing to calling next with 'return' 'next()'
  console.log("THIS IS THE FIRST MIDDLEWARE - AFTER CALLING NEXT()"); // Still print the code but don't helpful
});
app.use((req, res, next) => {
  console.log("THIS IS THE SECOND MIDDLEWARE");
  return next();
});
app.use((req, res, next) => {
  console.log("THIS IS THE THIRD MIDDLEWARE");
  return next();
});

// ============== testing routes ==============
app.get("/", (req, res) => {
  res.send("HELLO BACKEND CODER'S!!");
});

app.get("/cars", (req, res) => {
  res.send("SPORTS CAR WHAT I WANT NOW!!");
});
app.get("/home", (req, res) => {
  res.send("HOME IS SAFEST PLACE ON THE EARTH!!");
});

// ============== Listen Port ==============
app.listen(3000, () => {
  console.log("SERVER LISTENING PORT:3000");
});
