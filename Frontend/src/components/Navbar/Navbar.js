import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token") !== null;
    setLoggedIn(isLoggedIn);

    if (isLoggedIn) {
      fetchUserInfo();
    }
  }, []);

  const fetchUserInfo = () => {
    const token = localStorage.getItem('token');
  
    fetch('http://localhost:3333/authen', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Fetched user info:', data);
      if (data && data.customer_name) { // Check if customer_name exists in the response
        console.log('Customer name:', data.customer_name);
        setUserName(data.customer_name);
      } else {
        console.error('User info not found in response');
      }
    })
    .catch(error => {
      console.error('Error fetching user info:', error);
    });
  };
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    // Update loggedIn state
    setLoggedIn(false);
    // Clear userName state
    setUserName("");
  };

  return (
    <div className="navbar">
      <nav>
        <h2 className="logo">
          <Link to="/">
            Pengu<span> express</span>
          </Link>
        </h2>
        <ul className="nav_link">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Tracking">Tracking</Link>
          </li>
          <li>
            <Link to="/ShippingRates">Shipping Rates</Link>
          </li>
          <li>
            <Link to="/CreateShipment">Create Shipment</Link>
          </li>
          <li>
            <Link to="/PickUpRequest">Pickup request</Link>
          </li>
          <li>
            <Link to="/Claim">Claim</Link>
          </li>
          <li>
            <Link to="/Complaints">Complaints</Link>
          </li>
        </ul>
        {loggedIn ? (
          <>
            <span className="username">{userName}</span>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link className="login" to="/Login">
            <button>Login</button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
