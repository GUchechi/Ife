import React from "react";
import "./Product_Section.css";
import Rectangle from "../Assets/Rectangle 65.png";
import Rectangle66 from "../Assets/Rectangle 66.png";
import Rectangle67 from "../Assets/Rectangle 67.png";

const ProductSection = () => {
  return (
    <div className="ProductSection">
      <div className="productImg">
        <img className="productImage" width='250px' height='400px' src={Rectangle} alt="Product Images" />
        <img className="productImage extra" width='250px' height='360px' src={Rectangle66} alt="Product Images" />
        <img className="productImage" width='250px' height='400px' src={Rectangle67} alt="Product Images" />
      </div>
      <div className="productText">
        <p>
          ifẹ uses artificial intelligence to analyse the interests, lifestyle
          and preferences of both the giver and the recipients so that you can
          be sure that you are giving and receiving the perfect gift.
        </p>
      </div>
    </div>
  );
};

export default ProductSection;
