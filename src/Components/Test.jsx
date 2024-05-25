import React from 'react';
import './Test.css'; // Import własnych stylów CSS

const Test = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="keg.svg" alt="Logo" className="d-inline-block align-text-top logo" />
        </a>
        <div className="navbar-brand-text">
          <span className="navbar-text">KegDelPol</span>
          <span className="navbar-text">WeDeliverYourBeer</span>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Content</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Test;
