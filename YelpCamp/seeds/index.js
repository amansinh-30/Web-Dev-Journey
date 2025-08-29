// =============== Connecting with Database ===============
const mongoose = require("mongoose");
// const cities = require("./copy_city");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

// mongodb://server port/'database name'
mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// check there is an error or not
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected!!");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 1; i < 50; i++) {
    const randomIndex = Math.floor(Math.random() * 500);
    const camp = new Campground({
      location: `${cities[randomIndex].city}, ${cities[randomIndex].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
