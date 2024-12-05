const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const EmployeeModel = require("./models/Employee.js");
const saveProdcut = require("./database/db");
const UserModel = require("./models/User.js");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");
saveProdcut();

app.get("/", (req, res) => {
  res.send("hello from the server side");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const user = await EmployeeModel.findOne({ email: email });
  if (user) {
    if (user.password === password) {
      console.log("Success");
      res.json({ msg: "Success", userDetail: user });
    } else {
      res.json({ msg: "Password incorrect  " });
    }
  } else {
    res.json({ msg: "User not found" });
  }
});
app.post("/register", async (req, res) => {
  const { email } = req.body;
  try {
    // console.log(req.body);
    let user = await EmployeeModel.findOne({ email });
    if (!user) {
      const registerInfo = await EmployeeModel.create(req.body);
      res.json({ msg: "success", userDetail: registerInfo });
    } else {
      res.json({ msg: "user already registered" });
    }
    // console.log(registerInfo);
  } catch (error) {
    res.json(error);
  }
});

// // add address route
app.post("/addAddress", async (req, res) => {
  const { email, address } = req.body;
  try {
    // console.log(req.body)
    let user = await EmployeeModel.findOne({ email });
    if (!user) {
      user = new EmployeeModel({ email, addresses: [address] });
    } else {
      user.address.push(address);
    }
    await user.save();
    res.status(200).json({ message: "Address added successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

//// get products

app.get("/products", async (req, res) => {
  try {
    let data = await EmployeeModel.find({ products });
    console.log(data);
    res.status(200).json({ message: "products fetch successfully", data });
  } catch (error) {
    console.log("error");
  }
});

app.listen(5000, () => {
  console.log("server is running on 5000");
});

// app.post("/forgot-password", (req, res) => {
//   const { email } = req.body;
//   EmployeeModel.findOne({ email: email }).then((employees) => {
//     if (!employees) {
//       return res.send({ status: "User not existed" });
//     }
//     const token = jwt.sign({ id: user._id }, "jwt_secret_key", {
//       expiresIn: "1d",
//     });
//     var transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "me.arbazahmed@gmail.com",
//         pass: "jfhp izyi jrxe hchz",
//       },
//     });

//     var mailOptions = {
//       from: "me.arbazahmed@gmail.com",
//       to: {email},
//       subject: "Reset password link",
//       text: `http://localhost:3000/reset-password/${user._id}/${token}`,
//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         console.log(error);
//       } else {
//         return res.status(200).json({ msg: "Reset link sent to mail" });
//       }
//     });
//   });
// });

app.post("/forgot-password", async (request, response) => {
  try {
    const email = request.body.email;
    console.log(email);
    let user = await EmployeeModel.findOne({ email });
    console.log(user);
    if (user) {
      const token = jwt.sign({ id: user._id }, "jwt_secret_key", {
        expiresIn: "1d",
      });
      // console.log(token)
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "me.arbazahmed@gmail.com",
          pass: "jfhp izyi jrxe hchz",
        },
      });

      var mailOptions = {
        from: "me.arbazahmed@gmail.com",
        to: `${email}`,
        subject: "Reset your password",
        text: `http://localhost:3000/reset-password/${user._id}/${token}`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
         return  response.status(200).json({ message: "reset password link sent to mail" });
        }
      });
    } else {
      return response.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});


app.post('/reset-password/:id/:token',async(req,res)=>{
  const {id,token} = req.params;
  const {password} = req.body
console.log(password);
  console.log(id,token)

  jwt.verify(token,"jwt_secret_key",async(error,decoded)=>{
    if(error){
      return res.status(500).json({message:"Faild to verify token or invalid user"})
    }else{
      const result = await EmployeeModel.findByIdAndUpdate({_id:id}, {password:password }, { new: true });
      res.json({Result:result})
    }
  })

})