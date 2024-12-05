import axios from "axios";
import React, { useState } from "react";
import { Route, useNavigate, useParams } from "react-router-dom";
// import { Router } from "react-router-dom";
const ForgotPass = () => {
  const navigate = useNavigate();
  const [forgortpass, setForgotpass] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { id, token } = useParams;

  // axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    e.preventDefault()
    let result = await axios.post("http://localhost:5000/forgot-password", {
      email,
    });
    // console.log('success')
    try {
      // console.log(result.data)
      if (result.status === 200) {
        alert(
          result.data.message,
          "Please check your mail to reset your password"
        );
        // console.log(result.data.message);
        setForgotpass(false)
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const ForgotPassword = async (e) => {
  //   e.preventDefault();
  //   console.log(email);
  //   try {
  //     let result = await axios.post(
  //       `http://localhost:5000/forgot-password/${id}/${token}`,
  //       {
  //         email,
  //         password,
  //       }
  //     );
  //     console.log(result.status);
  //     if (result.status === 200) {
  //       alert(result.data.message);
  //       navigate("/login");
  //     } else {
  //       setErrMsg("Wrong email or something went wrong");
  //     }
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };

  return (
    <div className="forgot-container">
      <div className="forgot-contents">
        
          <div className="forgot-box">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Forgot Password </h2>
            </div>
            <form
              className="sign-for-pass"
               onSubmit={handleSubmit}
            >
              <input
                className="input-email"
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <p style={{ margin: "0" }}>{errMsg}</p>
              <button className="send-btn">
                Send Reset Password Link
              </button>
            </form>
            <hr
              style={{
                width: " 99%",
                color: "#808080",
                margin: "20px 1px 20px 1px",
              }}
            />
          </div>
       
      </div>
    </div>
  );
};

export default ForgotPass;
