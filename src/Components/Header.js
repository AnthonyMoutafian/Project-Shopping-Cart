import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Home.css";

export default function Header({ handleLoggedOut , cartItems }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  return (
    <div className="up-menu">
        <Link className="logo" to="/">FOOD SELLER</Link>
        <ul className="links">
            <Link className="link" to={"/"}>Home</Link>
            <Link onClick={handleLoggedOut} className="link" to={"/signup"}>{isLoggedIn ? "Log Out" : "Sign Up" }</Link>
             <li onClick={toggleModal} className="link btn">
                Cart
            </li>
        </ul>

            {modal && isLoggedIn && (
                <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                    <h2 className="modal-cart">Cart</h2>
                    <div className="modal-items">
                    {cartItems.map((item, index) => (
                        <div key={`${item.id}_${index}`} className="card-in-popup">
                            <img className="cart-popup-images" src={item.image} alt={item.name} />
                            <div className="cart-popup-name">{item.name}</div>
                            <div className="cart-popup-price">${item.quantity * item.price}</div>
                            <div className="cart-popup-quantity">Quantity: {item.quantity}</div>
                        <div>
                 </div>
            </div>
          ))}
                    </div>
                    <div className="modal-buttons">
                        <Link onClick={toggleModal} className="link" to={"/cart"}>Checkout</Link>
                        <button className="close-modal" onClick={toggleModal}>
                        CLOSE
                        </button>
                    </div>
                </div>
                </div>
            )}
        </div>
    );
}