import React from "react";
import { useParams } from "react-router-dom";
import useApi from "./utils/UseApi";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/bagSlice";
import { addProduct } from "./utils/favSlice";
const ProductDetails = () => {
  const { id } = useParams();

  const data = useApi();
  const list = data[0];
  const Dispatch = useDispatch();
  const addProductItem = (item) => {
    Dispatch(addItem(item));
  };
  const addFavItem = (item) => {
    Dispatch(addProduct(item));
  };

  if (!list) return;

  const item = list.find((item) => item.id == id);

  return (
    <div className="card-details">
      <div className="card-box">
        <div className="card">
          <img className="card-img" src={item.image} alt="img" />
        </div>
        <div className="des-box">
          <h1 className="title-name">{item.title}</h1>
          <p className="pro-des">{item.description}</p>
          <div className="product-details">
            <h3>{item.category}</h3>
            <h3>Rs {item.price*7}/-</h3>
          </div>
          <div className="rates">
            <span>
              Ratings - {item.rating.rate} reviews ({item.rating.count})
            </span>
            <button className="fav-btn" onClick={() => addFavItem(item)}>
              Add to Favorite
            </button>
            <button className="add-btn" onClick={() => addProductItem(item)}>
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
