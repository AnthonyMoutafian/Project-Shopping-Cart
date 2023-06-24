import { BrowserRouter,Navigate, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import { useEffect, useState } from "react";
import SignUp from "../Components/SignUp";
import { Cart } from "../Components/Cart";
import { data } from "../Components/Data";

export default function RouterFunction() {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems && storedCartItems.length > 0) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("loggedIn");
    if (storedLoggedIn) {
      setLoggedIn(true);
    }
  }, []);

  const handleCartItem = (productItem) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === productItem.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...productItem, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (productItem) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productItem.id);
    setCartItems(updatedCartItems);
  };

  const handleCartItemAdding = (productItem) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === productItem.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    }
  };

  const handleCartItemRemoving = (productItem) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === productItem.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];

      if (updatedCartItems[existingItemIndex].quantity >= 2) {
        updatedCartItems[existingItemIndex].quantity -= 1;
        setCartItems(updatedCartItems);
      } else {
        const newCartItems = updatedCartItems.filter((item) => item.id !== productItem.id);
        setCartItems(newCartItems);
      }
    }
  };

  const handleLoggedIn = () => {
    setLoggedIn(true);
    localStorage.setItem("loggedIn", "true");
  };

  const handleLoggedOut = () => {
    setLoggedIn(false);
    localStorage.removeItem("loggedIn");
  };

  return (
    <Routes>
        <Route
          path="/"
          element={loggedIn ? (
            <Home
              setCartItems={setCartItems}
              handleRemoveProduct={handleRemoveProduct}
              productItems={productItems}
              handleCartItem={handleCartItem}
              handleLoggedOut={handleLoggedOut}
            />
          ) : (
            <Navigate to="/signup" replace={true} />
          )}
        />
        <Route
          path="/cart"
          element={loggedIn ? (
            <Cart
              setCartItems={setCartItems}
              handleCartItemRemoving={handleCartItemRemoving}
              handleCartItemAdding={handleCartItemAdding}
              cartItems={cartItems}
              handleRemoveProduct={handleRemoveProduct}
              productItems={productItems}
              handleCartItem={handleCartItem}
              handleLoggedOut={handleLoggedOut}
            />
          ) : (
            <Navigate to="/signup" replace={true} />
          )}
        />
        <Route
          path="/signup"
          element={loggedIn ? (
            <Navigate to="/" replace={true} />
          ) : (
            <SignUp setLoggedIn={handleLoggedIn} />
          )}
        />
      </Routes>
  );
}
