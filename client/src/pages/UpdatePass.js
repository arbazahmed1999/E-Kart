import axios from "axios";
import React, { useState } from "react";
import { Route, useNavigate, useParams } from "react-router-dom";

const UpdatePass = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { id, token } = useParams;

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `http://localhost:5000/reset-password/${id}/${token}`,
        { password }
      );

      console.log(result);
      if (result.status === 2000) {
        navigate("/");
      }
    } catch (error) {}
  };

  return (
    <div className="forgot-container">
      <div className="forgot-contents">
        <div className="forgot-box">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Reset Password </h2>
          </div>
          <form className="sign-for-pass" onSubmit={resetPassword}>
            <label htmlFor="password">
              <p style={{ margin: "0" }}>Enter new password</p>
            </label>
            <input
              className="input-email"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p style={{ margin: "0" }}>{errMsg}</p>
            <button
              className="send-btn"
              // onClick={ForgotPassword}
            >
              Update
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

export default UpdatePass;
