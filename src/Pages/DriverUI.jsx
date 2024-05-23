import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import MoveTo from '../Components/MoveTo';
import './DriverUI.css'; // Zaimportuj plik stylów CSS

const DriverUI = () => {
  return (
    <div className="driver-ui-container">
      <Navbar />
      <div className="content-Driver-UI">
        <div className="choose-action-driver">Choose your action</div>
        <div className="centered-images-driver">
          <MoveTo imageSrc="/AssignOrder.svg" title="Assigned orders" to="/CreateOrder" />
          <MoveTo imageSrc="/OrderStatus.svg" title="Change order status" to="/orders" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DriverUI;
