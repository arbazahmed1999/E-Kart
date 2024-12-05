import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../component/utils/UserSlice";

const SingIn = ({ handleClose }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [signUp, setSignUp] = useState(true);
  const dispatch = useDispatch();

  // console.log(name,email,password);
  const handleSubmit = async (e, Route) => {
    e.preventDefault();
    // console.log(Route);

    try {
      if ( email && password) {
        console.log(email);
        const Datas = await axios.post("http://localhost:5000/" + Route, {
          name,
          email,
          password,
        });
        // console.log(Datas);
        const ans = Datas.data;
        console.log(ans.msg);
        console.log(Datas.data.userDetail);
        const strData = JSON.stringify(Datas.data.userDetail);
        if (ans.msg === "Success") {
          console.log(strData);
          localStorage.setItem("userData", strData);
          console.log("success");
          handleClose();
          navigate("/");
        } else {
          const { msg } = Datas.data;
          setErrMsg(msg);
        }
      } else {
        setErrMsg("Fill all required fields");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signin-container">
      <div className="content">
        {signUp ? (
          <div className="details">
            <div className="login-title">
              <h1>Login</h1>
              <div className="close-btn" onClick={handleClose}>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "xx-large" }}
                >
                  cancel
                </span>
              </div>
            </div>
            <form className="signin" onSubmit={(e) => handleSubmit(e, "login")}>
              <input
                className="E-input"
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="P-input"
                type="Password"
                placeholder="******"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>{errMsg}</p>
              <button className="signup-btn">Login</button>
            </form>

            <div>
              <Link
                to="fogotPassword"
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "darkslategray",
                }}
                onClick={handleClose}
              >
                {" "}
                Forgot Password ?
              </Link>
            </div>
            <hr style={{ margin: "20px 1px 20px 1px" }} />
            <div className="new-ac">
              <h5
                onClick={() => {
                  setSignUp(!signUp);
                }}
              >
                Create account
              </h5>
            </div>
          </div>
        ) : (
          <div className="details">
            <div className="login-title">
              <h1>Sing Up</h1>
              <div className="close-btn" onClick={handleClose}>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "xx-large" }}
                >
                  cancel
                </span>
              </div>
            </div>
            <form
              className="signin"
              onSubmit={(e) => handleSubmit(e, "register")}
            >
              <input
                className="User-input"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="E-input"
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="P-input"
                type="Password"
                placeholder="******"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>{errMsg}</p>
              <button className="signup-btn">Sign Up</button>
            </form>

            <hr style={{ margin: "20px 1px 20px 1px" }} />
            <div className="axist-ac">
              <h5>Already have an account?</h5>
              <span
                style={{
                  color: "darkslategray",
                  paddingBottom: "10px",
                  paddingLeft: "10px",
                }}
                onClick={() => {
                  setSignUp(!signUp);
                }}
              >
                Login
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// const SingUp =({handleClose})=>{
//   const [checkName, setChekName]=useState("")
//   const [checkEmail, setChekEmail]=useState("")
//   const [checkPass, setChekPass]=useState("")
// }

export default SingIn;
