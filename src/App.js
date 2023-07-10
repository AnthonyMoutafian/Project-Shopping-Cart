import React, { useState } from "react";
import {BrowserRouter} from "react-router-dom";
import Routers from "./Router/Routers";

export default function App() {
  
  return (
    <BrowserRouter>  
      <Routers />  
    </BrowserRouter>
  );
}
