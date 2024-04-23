import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Login,
  Complaints,
  Claim,
  CreateShipment,
  ShippingRates,
  PickUp,
  Tracking,
} from "./components/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="app">
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Complaints" element={<Complaints />} />
          <Route path="/Claim" element={<Claim />} />
          <Route path="/CreateShipment" element={<CreateShipment />} />
          <Route path="/ShippingRates" element={<ShippingRates />} />
          <Route path="/PickUpRequest" element={<PickUp />} />
          <Route path="/Tracking" element={<Tracking />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
