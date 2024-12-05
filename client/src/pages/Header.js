import React, { useState } from "react";
import Logo from "../assets/shoppers.png";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SingIn from "./SingIn";
import { useNavigate } from "react-router-dom";

const Title = () => (
  <Link to="/">
    <img className="logo" alt="logo" src={Logo} />
  </Link>
);

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const [dumy, setDummy] = useState(true);
  // const dispatch = useDispatch();

  const favlist = useSelector((state) => state.fav.item);
  const baglist = useSelector((state) => state.bag.item);
  // const navigate = useNavigate();
  // const userData = useSelector((Store) => Store.user.item);
  // if (userData.length > 0) {
  //   localStorage.setItem("userData", JSON.stringify(userData));
  // }

  const storeData = localStorage.getItem("userData");
  const userDetails = JSON.parse(storeData);
  console.log(userDetails);
  // const [userName, setUsername] = useState(userDetails.name);
  console.log(userDetails?.name);
  const openSignIn = () => {
    setToggle(true);
  };

  const closeSignIn = () => {
    setToggle(false);
  };
  const handleOut = () => {
    localStorage.removeItem("userData");
    // setUsername("");
    setDummy(!dumy);
  };
  // if(!userDetails) return
  return (
    <div className="header">
      <Title />
      <div className="nav-item">
        <div className="nav-items">
          <Link to="/WishList" className="icons">
            <div className="fav-icon">
              <span className="material-symbols-outlined">favorite</span>
              {favlist.length === 0 ? (
                <span className="fav"></span>
              ) : (
                <span className="fav">{favlist.length}</span>
              )}
            </div>
          </Link>
          <Link to="/Bag" className="icons">
            <div className="bag-icon">
              <span className="material-symbols-outlined">Shopping_bag</span>
              {baglist.length === 0 ? (
                <span className="bag"></span>
              ) : (
                <span className="bag">{baglist.length}</span>
              )}
            </div>
          </Link>

          <div className="login-logout">
            {userDetails ? (
              <div style={{ display: "flex", gap: "20px" }}>
                <Link to="/myAccount">
                  <button className="user-btn">{userDetails?.name}</button>
                </Link>
                <button className="logout-btn" onClick={handleOut}>
                  <span className="material-symbols-outlined">person_off</span>
                  Sign Out
                </button>
              </div>
            ) : (
              <button className="login-btn" onClick={openSignIn}>
                <span className="material-symbols-outlined">person</span>
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>

      {toggle ? <SingIn handleClose={closeSignIn} /> : null}
    </div>
  );
};

export default Header;
