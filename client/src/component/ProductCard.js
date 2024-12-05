import React from "react";
import UseApi from "./utils/UseApi";
import { Link } from "react-router-dom";

function ProductCard({ filteredProducts, setFilteredProducts }) {
  const [allProduct] = UseApi();

  const mapData = filteredProducts || allProduct;
  console.log(mapData)
  if (!mapData) return;
  return (
    <>
      {mapData.map((item) => {
        return (
          <article className="product-card" key={item.id}>
            <div className="cards">
              <Link to={"/product/" + item.id}>
                <img className="product-img" src={item.image} alt="img" />
              </Link>
            </div>
            <div className="des-box">
              <h3 className="title-name">{item.title}</h3>
              {/* <p className="des">{item.description}</p> */}
              <div className="product-details">
                <h5>{item.category}</h5>
                <h5> Rs/- {item.price * 7}</h5>
              </div>
              {/* {`Rating: ${item?.rating?.rate} (${item?.rating?.count} reviews)` */}
              <div className="rates">
                <span>Ratings - {item.rating.rate}</span>
                <span> reviews ({item.rating.count})</span>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default ProductCard;
