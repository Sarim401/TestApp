// Main.jsx

import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <h1>Log in to your account</h1>
      <form className="login-form">
        <div className="input-container">
          <label htmlFor="login">Login</label>
          <input type="text" id="login" placeholder="Login" className="input-field" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" className="input-field" />
        </div>
        <button type="submit" className="submit-button">Sign in</button>
      </form>
    </div>
  );
};

export default Main;
