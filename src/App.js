import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Routers from "./Router/Routers";
import Header from "./Components/Header";
import { Cart } from "./Components/Cart";
import SignUp from "./Components/SignUp";

export default function App() {

  return (
    <BrowserRouter>
      <Header />   
      <Routers />  
    </BrowserRouter>
  );
}
