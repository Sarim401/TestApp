import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import MoveTo from '../Components/MoveTo';
import './ClientUI.css'; // Zaimportuj plik stylów CSS

const ClientUI = () => {
    return (
      <div className="client-ui-container">
        <Navbar />
        <div className="content-Client-UI">
          <div className="centered-images">
            <MoveTo imageSrc="/shoppingcart.svg" title="Create orders" to="/CreateOrder" />
            <MoveTo imageSrc="/order.svg" title="Orders" to="/orders" />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

export default ClientUI;
