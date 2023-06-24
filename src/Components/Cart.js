import React, { useEffect } from "react";
import "./Home.css";

export const Cart = ({ handleLoggedOut, cartItems, handleRemoveProduct, handleCartItemAdding, handleCartItemRemoving }) => {
  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  if (!cartItems || cartItems.length === 0) {
    return (
      <>
        <div className="cart-empty-sign-div">
          <h1 className="cart-empty-sign">Cart Is Empty</h1>
        </div>
      </>
    );
  }

  const handleAddOne = (item) => {
    handleCartItemAdding(item);
  };

  return (
    <>
      <div className="cart-items">
        <div>
          {cartItems.map((item, index) => (
            <div key={`${item.id}_${index}`} className="card">
              <img className="home-product-images" src={item.image} alt={item.name} />
              <h3 className="home-product-name">{item.name}</h3>
              <h4 className="home-product-price">${item.quantity * item.price}</h4>
              <button className="adding-or-removing-item-in-cart" onClick={() => handleAddOne(item)}>
                +1
              </button>
              <h4 className="home-product-quantity">Quantity: {item.quantity}</h4>
              <button className="adding-or-removing-item-in-cart" onClick={() => handleCartItemRemoving(item)}>
                -1
              </button>
              <hr />
              <div>
                <button className="add-to-cart" onClick={() => handleRemoveProduct(item)}>
                  Remove From Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="LogOut" onClick={handleLoggedOut}>Log Out</button>
    </>
  );
};
