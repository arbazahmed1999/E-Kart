import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./utils/bagSlice";
import { removeItem } from "./utils/favSlice";

const WishList = () => {
  const favItem = useSelector((store) => store.fav.item);
  console.log(favItem);
  const Dispatch = useDispatch();
  const addProductItem = (item) => {
    Dispatch(addItem(item));
  };
  const handleRemove = (item) => {
    Dispatch(removeItem(item));
  };
  return (
    <div className="wish-cart">
      {favItem.length === 0 ? (
        <div className="empty-list">
          <img
            className="wish-img"
            alt="empty"
            src={require("../assets/wish_empty_cart.png")}
          />
        </div>
      ) : (
        <div>
          {favItem.map((elm, item) => {
            return (
              <>
                <article className="fav-container" key={elm}>
                  <div className="fav-box">
                    <div className="fav-item">
                      <h2 className="fav-title">Favorite Item</h2>
                    </div>
                    <div className="fav-product">
                      <div className="fav-product-details">
                        <div className="img-box">
                          <img
                            className="fav-image"
                            src={elm.image}
                            alt="img"
                          />
                        </div>
                        <div className="text-box">
                          <h3 className="name">{elm.title}</h3>

                          <p className="description">{elm.description}</p>
                        </div>
                        <div className="buttons">
                          <h3 className="price">Rs {elm.price}/-</h3>
                          <button
                            className="add-bag"
                            onClick={() => addProductItem(elm)}
                          >
                            Add to Bag
                          </button>
                          <button
                            className="remove-btn"
                            onClick={() => handleRemove(item)}
                          >
                            <span className="material-symbols-outlined">
                              delete
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default WishList;
