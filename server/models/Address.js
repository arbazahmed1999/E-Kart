const mongoose = require("mongoose");
const AddressSchema = new mongoose.Schema({
  name: String,
  address: String,
  pincode: String,
  city: String,
});

const AddressModel = mongoose.model("address", AddressSchema);
module.exports = AddressModel;
