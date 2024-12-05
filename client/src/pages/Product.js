import React from "react";
import ProductCard from "../component/ProductCard";


const Product = ({filteredProducts,setFilteredProducts}) => {
  return (
    <div className="product-box">
      
      <ProductCard filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} />
    
    </div>
  );
};

export default Product;
