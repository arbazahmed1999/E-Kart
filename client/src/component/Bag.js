import { useDispatch, useSelector } from "react-redux";
import { clearbag, removeItem } from "./utils/bagSlice";
import { useEffect, useState } from "react";
import SingIn from "../pages/SingIn";
// import { userDetails } from "./utils/UserSlice";
import axios from "axios";
import { userDetails } from "./utils/UserSlice";

const Bag = () => {
  const [sum, setSum] = useState();
  const [toggle, setToggle] = useState(false);
  const bagItem = useSelector((store) => store.bag.item);
  const dispatch = useDispatch();
  const [address, setAddress] = useState({
    streetAddress: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [dummy, setDummy] = useState(true);
  const [fetchAddress, setFetchAddress] = useState(null);

  const storeData = localStorage.getItem("userData");
  const userDetail = JSON.parse(storeData);
  console.log(userDetail);

  const email = userDetail.email;

  useEffect(() => {
    setDummy(!dummy);
  }, []);
  // if(userDetail){
  //
  // }
  if (fetchAddress) {
    const StringAddress = JSON.stringify(fetchAddress);
    localStorage.setItem("storedAddress", StringAddress);
  }
  const binaryAddress = localStorage.getItem("storedAddress");
  const storedAddress = JSON.parse(binaryAddress);

  const openSignIn = () => {
    setToggle(true);
  };

  const closeSignIn = () => {
    setToggle(false);
  };

  const handleClearbag = () => {
    dispatch(clearbag());
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const { Name, Address, pinCode, city } = addDetails;
  //     const { email } = userDetail[0];
  //     console.log(email);
  //     console.log(
  //       Name.length > 0 &&
  //         Address.length > 0 &&
  //         pinCode.length > 0 &&
  //         city.length > 0
  //     );
  //     if (
  //       Name.length > 0 &&
  //       Address.length > 0 &&
  //       pinCode.length > 0 &&
  //       city.length > 0
  //     ) {
  //       const userData = await axios.post(`${URL}/registerAddress`, {
  //         Name,
  //         Address,
  //         pinCode,
  //         city,
  //         email,
  //       });
  //       setFetchAddress(userData.data.data);
  //     } else {
  //       alert("fill details first");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //// value from input
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  //// add address api
  const submitForm = async (e) => {
    e.preventDefault();
    // console.log(address);
    try {
      let response = await axios.post("http://localhost:5000/addAddress", {
        email,
        address,
      });
      alert(response.data.message);
      // console.log(response.data.message);
      setAddress({
        streetAddress: "",
        city: "",
        state: "",
        pincode: "",
      });
    } catch (error) {
      console.log("error while calling add address api ", error.message);
    }
  };

  // const placedorder = () => {
  //   window.alert("Your order has been placed");
  // };
  useEffect(() => {
    const totalSum = bagItem.reduce((acc, item) => acc + item.price, 0);
    setSum(totalSum);
  }, []);

  let total = 0;

  // if(!userDetail) return

  return (
    <div>
      {bagItem.length === 0 ? null : (
        <div>
          <div className="delivery-container">
            <h2>
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: "30px",
                  color: "darkslategray",
                  marginBottom: "30px",
                }}
              >
                location_on
              </span>
              Submit delivery address
            </h2>
            <div className="adress-container">
              <h3>Save address</h3>
              <form onSubmit={submitForm}>
                <div className="all-input">
                  <input
                    type="text"
                    placeholder="Street Address"
                    name="streetAddress"
                    className="add-value"
                    value={address.streetAddress}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="City"
                    name="city"
                    className="add-value"
                    value={address.city}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    placeholder="State"
                    className="add-value"
                    name="state"
                    value={address.state}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="pincode"
                    className="add-value"
                    value={address.pincode}
                    name="pincode"
                    onChange={handleChange}
                  />
                </div>
                <button className="save-btn">Save</button>
              </form>
            </div>
          </div>
        </div>
      )}

      {bagItem.length === 0 ? (
        <div className="empty-box">
          <img
            className="bag-img"
            alt="empty"
            src={require("../assets/empty_cart.png")}
            style={{ width: "30%" }}
          />
        </div>
      ) : (
        <section className="container" id="cart-box">
          <>
            <div className="item-box">
              <button className="clear-btn" onClick={() => handleClearbag()}>
                Clear Bag
              </button>
              {bagItem.map(
                ({
                  item,
                  id,
                  title,
                  price,
                  description,
                  category,
                  image,
                  rating,
                }) => {
                  return (
                    <article key={id} className="item">
                      <img src={image} alt="product" />
                      <div>
                        <h3>{title}</h3>
                        <h6>{category}</h6>
                        <h3
                          className="price"
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          Rs {price}/-
                          <button
                            className="remove-btn"
                            onClick={() => handleRemove(item)}
                          >
                            <span className="material-symbols-outlined">
                              delete
                            </span>
                          </button>
                        </h3>
                      </div>
                    </article>
                  );
                }
              )}
            </div>

            <div className="chackout-box">
              <div>
                <h6>price</h6>
                <h5>{sum}</h5>
              </div>
              <div>
                <h6>discount</h6>
                <h5>5</h5>
              </div>
              <hr />
              <div>
                <h5>total</h5>
                <h4>95</h4>
              </div>
              {userDetail ? (
                <button className="buy-btn">check out </button>
              ) : (
                <button
                  className="login-btn"
                  onClick={() => {
                    openSignIn();
                  }}
                >
                  Sign In
                </button>
              )}
            </div>
          </>
          {toggle ? <SingIn handleClose={closeSignIn} /> : null}
        </section>
      )}
    </div>
  );
  // return (
  //   <div>
  //     {bagItem.map((elm, item) => {
  //       let { price } = elm;
  //       total = total + price;
  //       return (
  //         <article className="bag-container">
  //           <div className="bag-box">
  //             <div className="bag-item">
  //               <h2 className="bag-title">Cart Item</h2>
  //             </div>
  //             <div className="bag-product">
  //               <img className="bag-image" src={elm.image} alt="img" />
  //               <h3 className="name">{elm.title}</h3>
  //               <p className="description">{elm.description}</p>
  //               <h3 className="price">Rs {elm.price / 100}/-</h3>
  //               <button onClick={() => handleRemove(item)}>
  //                 <span className="material-symbols-outlined">delete</span>
  //               </button>
  //             </div>
  //         </article>
  //           </div>
  //           <div className="checkout-container">
  //             <div className="checkout-box">
  //               <div className="subtotal">Rs {total / 100}/-</div>
  //               {/* <div className="totalorder">TO PAY:</div>
  //               <div className="totalorder">Rs {total / 100}/-</div> */}
  //             </div>
  //           </div>
  //           <button
  //             onClick={() => {
  //               placedorder();
  //             }}
  //           >
  //             Proced to pay
  //           </button>
  //       );
  //     })}
  //   </div>
  // );
};

export default Bag;
