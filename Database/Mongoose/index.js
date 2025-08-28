// =============== Connect with Mongoose ===============
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/carsCollection");
// .then(()=>{
//     console.log('CONNECTION OPEN!');
// })
// .catch(err =>{
//     console.log('OH NO ERROR!!!!');
//     console.log(err);
// })

// =============== 'async function' to check the "error" ===============
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/carsCollection/exotic_car");
  console.log("CONNECTED!!");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const carSchema = new mongoose.Schema({
  name: String,
  model: String,
  year: Number,
  horsePower: String,
});

// =============== Add Data ===============
// ("collection_name", "Database_name")
const Car = mongoose.model("exotic_car", carSchema);

// =============== Insert Single Item ===============
// const Cadillac = new Car({
//   name: "Cadillac",
//   model: "Escalade ESV",
//   year: 2023,
//   horsePower: " 682 hp",
// });

// =============== Insert Many Items ===============
// Car.insertMany([
//   { name: "Lamborghini", model: "Urus", year: 2022, horsePower: "650 hp" },
//   { name: "Aston Martin", model: "DBX", year: 2020, horsePower: "542 hp" },
//   { name: "Porsche", model: "Cayenne", year: 2021, horsePower: "541 hp" },
//   { name: "Rolls-Royce ", model: "Cullinan", year: 2023, horsePower: "563 hp" },
// ]);
