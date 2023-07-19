import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";


export default function SignUp({ setLoggedIn }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = () => {
    if (name && password) {
      if(password.length < 8){
        alert("password can't be shorter than 8 digits")
      }else{
        setLoggedIn(true);
        localStorage.setItem("loggedIn", "true");
        navigate("/");
        window.location.reload();
      }
    } else {
      alert("Invalid name or password.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up Form</h2>
      <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
      <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}