const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  //  To check wather it get an error.
  .then(() => {
    console.log("CONNECTION OPEN!!");
  })
  .catch((err) => {
    console.log("OHH NO IT'S AN ERROR!!!!");
    console.log(err);
  });

const perosnSchema = new mongoose.Schema({
  first: String,
  last: String,
});

perosnSchema.virtual("fullname").get(function () {
  return `${this.first} ${this.last}`;
});

// ================ Mongoose Middleware ================
perosnSchema.pre("save", async function () {
    this.first = 'YO'
    this.last = 'YO!!!!'
  console.log("ABOUT TO SAVE!!!!");
});
perosnSchema.post("save", async function () {
  console.log("JUST SAVED!!!!");
});



const Person = mongoose.model("Person", perosnSchema);
