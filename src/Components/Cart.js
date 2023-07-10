import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router";

export const Cart = ({setCartItems, cartItems, handleRemoveProduct, handleCartItemAdding, handleCartItemRemoving }) => {
  
  const navigate = useNavigate()
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      const totalPrice = cartItems.reduce((total, item) => {
        return total + item.quantity * item.price;
      }, 0);
      setTotalPrice(totalPrice);
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

  const handlePurchase = ()=>{
    navigate("/purchase")
    setCartItems([])
  }

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
                <button className="remove-from-cart" onClick={() => handleRemoveProduct(item)}>
                  Remove From Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="total-price">Total: {totalPrice}$</div>
      <button className="purchase-button" onClick={handlePurchase}>Purchase</button>
    </>
  );
};