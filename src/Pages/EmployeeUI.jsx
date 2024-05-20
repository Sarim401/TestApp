import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import MoveTo from '../Components/MoveTo';
import "./EmployeeUI.css"; // Zaimportuj plik stylów CSS

const EmployeeUI = () => {
  return (
    <div className="employee-ui-container">
      <Navbar />
      <div className="content">
        <MoveTo imageSrc="/DriverLicense.svg" title="Assign The Driver" to="/AssignTheDriver" />
        <MoveTo imageSrc="/AddUser.svg" title="Create New Accout" to="/AssignTheDriver" />
        <MoveTo imageSrc="/Database.svg" title="Database" to="/AssignTheDriver" />
        <MoveTo imageSrc="/DeliveryBox.svg" title="Approve Order" to="/AssignTheDriver" />
        <MoveTo imageSrc="/UpdateUser.svg" title="Update The User" to="/AssignTheDriver" />
        <MoveTo imageSrc="/Truck.svg" title="Add Vehicle" to="/AssignTheDriver" />
      </div>
      <Footer />
    </div>
  );
};

export default EmployeeUI;
