// const mongoose = require("mongoose");
// const EmployeeSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });


// const EmployeeModel = mongoose.model("employees", EmployeeSchema);
// module.exports = EmployeeModel;


const mongoose = require("mongoose");


const addressSchema = new mongoose.Schema({
  streetAddress: String,
  city: String,
  state: String,
  pincode: String,
  
});


const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: [addressSchema]
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema);
module.exports = EmployeeModel;
