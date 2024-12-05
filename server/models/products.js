const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  oldPrice: Number,
  description: String,
  category: String,
  image: String,
  brand: String,
});

const product = mongoose.model("product", productSchema);

module.exports = product;
