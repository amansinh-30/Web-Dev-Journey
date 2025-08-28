// =============== Connect with Mongoose ===============
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

// ======= Write a "Schema" and set a 'type' of each 'keys' =======
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive okay?"], // price would be negative set a custom message.
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});

// =============== Instance Methods ===============
// Define a schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: Number,
});

// Or, assign a function to the "methods" object of our userSchema
userSchema.methods.getFullName = function () {
  return `${this.name} (${this.email})`;
};

// =============== xxxxxxxxxxxxxx ===============
/*productSchema.methods.greet = function () {
  console.log("HEY, HELLO, HOW R U?");
  console.log(`- from ${this.name}`);
};*/

// ======= Set "Own Method" for sales on 'Particular Product' =======
productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  this.save();
};

//
// ======= Set "Own Method" to set the categories for 'Particular Product' =======
productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save;
};

// ============== Static Method ==============
productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 });
};

// =========== Add product according to the "Schema" ===========
const Product = mongoose.model("Product", productSchema);

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Mountain Bike" });
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
  await foundProduct.addCategory("Outdoor");
  console.log(foundProduct);

  /*
  if (foundProduct) {
    foundProduct.greet();
  } else {
    console.log("Product not found.");
  }
  */
};
findProduct();

// =========== For Statics Method ===========
Product.fireSale().then((res) => console.log(res));

// /*
// =========== Add 'Products' manually ===========
const jacket = new Product({
  name: "Bike Jacket",
  price: 39.5,
  categories: ["Riding"],
  size: "S",
});
jacket
  .save()
  .then((data) => {
    console.log("IT WORKED!!");
    console.log(data);
  })
  .catch((err) => {
    console.log("Ohh No, It's an ERROR!!!!!");
    console.log(err.errors?.name?.properties?.message || err);
  });
// */

// /*
// ======= To run "Negative" value. need to add 'runValidators' =======
Product.findOneAndUpdate(
  { name: "Tire Air Pump" },
  { price: -20.2 },
  { new: true, runValidators: true }
)
  .then((data) => {
    console.log("IT WORKED!!");
    console.log(data);
  })
  .catch((err) => {
    console.log("Ohh No, It's an ERROR!!!!!");
    // console.log(err.errors?.name?.properties?.message || err);
    if (err.errors) {
      for (let field in err.errors) {
        console.log(
          `Validation error for ${field}: ${err.errors[field].message}`
        );
      }
    } else {
      console.log(err);
    }
  });
// */
