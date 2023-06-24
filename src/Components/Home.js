import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "./Data";
import "./Home.css";
import { Cart } from "./Cart";

export default function Home({productItems , handleCartItem}) {

  return (
    <>
      {productItems.map((productItem) => (
        <div className="card" key={productItem.id}>
          <img className="home-product-images" src={productItem.image} alt={productItem.name} />
          <h3 className="home-product-name">{productItem.name}</h3>
          <h4 className="home-product-price">${productItem.price}</h4>
          <div>
            <button onClick={() => handleCartItem(productItem)} className="add-to-cart">
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
}