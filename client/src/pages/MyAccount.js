import React, { useState } from "react";

const MyAccount = () => {
  const [selectedComponent, setSelectedComponent] = useState("Order");
  const storeData = localStorage.getItem("userData");

  //for css property
  const [selectedButton, setSelectedButton] = useState("Order");

  const userDetails = JSON.parse(storeData);
  // console.log(customerDetails)
  const handleComponentChange = (componentName) => {
    setSelectedComponent(componentName);
    setSelectedButton(componentName);
  };
  if (!userDetails) return;

  return (
    <div className="account-container">
      <div className="account-info">
        <div>
          <h1 className="user-name" style={{}}>
            {userDetails?.name.toUpperCase()}
          </h1>
          <div style={{ display: "flex", gap: "20px", color: "whitesmoke" }}>
            <p>8442035140</p>
            <p>{userDetails?.email}</p>
          </div>
        </div>
        <div className="edit-info">
          <button className="edit-btn">Edit Profile</button>
        </div>
      </div>

      <div className="profile">
        <div className="side-bar">
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
            onClick={() => handleComponentChange("Order")}
            className={selectedButton === "Order" ? "selecte" : ""}
          >
            <span
              class="material-symbols-outlined"
              style={{
                color: "#535665",
                border: "1px solid",
                borderRadius: "50%",
                padding: "4px",
                fontSize: "smaller",
              }}
            >
              local_mall
            </span>
            <span className="title">Order History</span>
          </h4>
          {/* <h4
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
            onClick={() => handleComponentChange("BakeOne")}
            className={selectedButton === "BakeOne" ? "selected" : ""}
          >
            <iconify-icon
              icon="token:bake"
              style={{
                color: "#535665",
                fontSize: "x-large",
                border: "1px solid",
                borderRadius: "50%",
              }}
            ></iconify-icon>
            <span className="title">Bake One</span>
          </h4> */}
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
            onClick={() => handleComponentChange("Favourites")}
            className={selectedButton === "Favourites" ? "selected" : ""}
          >
            <span
              class="material-symbols-outlined"
              style={{
                color: "#535665",
                fontSize: "large",
                border: "1px solid",
                borderRadius: "50%",
                padding: "2px",
              }}
            >
              favorite
            </span>

            <span className="title">Favourites</span>
          </h4>
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
            onClick={() => handleComponentChange("Address")}
            className={selectedButton === "Address" ? "selected" : ""}
          >
            <span
              class="material-symbols-outlined"
              style={{
                color: "#535665",
                fontSize: "larger",
                border: "1px solid",
                borderRadius: "50%",
                padding: "2px",
              }}
            >
              home_pin
            </span>

            <span className="title">Address</span>
          </h4>
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
            onClick={() => handleComponentChange("Payment")}
            className={selectedButton === "Payment" ? "selected" : ""}
          >
            <span
              class="material-symbols-outlined"
              style={{
                color: "#535665",
                fontSize: "larger",
                border: "1px solid",
                borderRadius: "50%",
                padding: "2px",
              }}
            >
              account_balance_wallet
            </span>

            <span className="title">Payments</span>
          </h4>
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
            onClick={() => handleComponentChange("Settings")}
            className={selectedButton === "Settings" ? "selected" : ""}
          >
            <span
              class="material-symbols-outlined"
              style={{
                color: "#535665",
                fontSize: "larger",
                border: "1px solid",
                borderRadius: "50%",
                padding: "2px",
              }}
            >
              manage_accounts
            </span>
            <span className="title">Settings</span>
          </h4>
        </div>

        <div className="detail-container">
          {/* {selectedComponent === "Order" && <Order />}
          {selectedComponent === "BakeOne" && <Bake />}
          {selectedComponent === "Favourites" && <Favourites />}
          {selectedComponent === "Payment" && <Payment />}
          {selectedComponent === "Address" && <Address />}
          {selectedComponent === "Settings" && <Settings />} */}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
