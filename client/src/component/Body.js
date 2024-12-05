import React, { useState } from "react";
import { filterProduct } from "./utils/useHelper";
import UseApi from "./utils/UseApi";
import Product from "../pages/Product";

function Body() {
  const [searchInput, setSearchInput] = useState("");
  const [allProduct, category] = UseApi();
  let [filteredProducts, setFilteredProducts] = useState(null);
  const [sortBy, setSortBy] = useState("highest");
  if (!allProduct) return;

  // console.log(filteredProducts);
  const handleCategory = (name) => {
    if (
      name === "men's clothing" ||
      "jewelery" ||
      "women's clothing" ||
      "electronics"
    ) {
      const result = allProduct.filter((curData) => {
        return curData.category === name;
      });
      setFilteredProducts(result);
    }
    if (name === "All") {
      return setFilteredProducts(allProduct);
    }
  };

  const mapData = filteredProducts || allProduct;
  if (mapData) {
    if (sortBy === "lowest") {
      let data = mapData.sort((a, b) => a.price - b.price);
      filteredProducts = data;
      //  setFilteredProducts(data)
    } else if (sortBy === "highest") {
      let data = mapData.sort((a, b) => b.price - a.price);
      filteredProducts = data;
      //  setFilteredProducts(data)
    }
  }

  // console.log(category);
  if (!category) return;
  const newCategory = [...new Set(category), "All"];

  return (
    <>
      <div className="category-box">
        {newCategory.map((name, index) => {
          return (
            <button
              className="category-btn"
              key={index}
              onClick={() => handleCategory(name)}
            >
              {name}
            </button>
          );
        })}
        <select
          className="sort-btn"
          id=""
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
          value={sortBy}
        >
          <option value="highest">Price: High to Low</option>
          <option value="lowest">Price: Low to High</option>
        </select>
        <div className="search-container">
          <div className="search-input">
            <input
              className="input"
              type="search"
              placeholder="Search Product"
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              value={searchInput}
            />
            <button
              className="search-btn"
              onClick={() => {
                const id = filterProduct(searchInput, allProduct);
                console.log(id);
                setFilteredProducts(id);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <Product
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
    </>
  );
}

export default Body;
