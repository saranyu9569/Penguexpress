import React, { useState } from "react";
import { Navbar } from "../index";
import arrow from "./arrow-circle.svg";
import "./Tracking.css";
import axios from "axios";

function ShippingForm() {
  const [searched, setSearched] = useState(false);
  const [parcelNumber, setParcelNumber] = useState("");
  const [trackingInfo, setTrackingInfo] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3333/tracking/${parcelNumber}`);
      const data = response.data;
      
      if (Array.isArray(data) && data.length > 0) {
        const firstTrackingInfo = data[0]; // Access the first element of the array
        console.log("Timestamp:", firstTrackingInfo.stamptime); // Accessing stamptime value
        // Set other values to state if needed
        setTrackingInfo(firstTrackingInfo);
        setSearched(true);
      } else {
        console.error("No tracking information found");
      }
    } catch (error) {
      console.error("Error fetching tracking information", error);
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="Tracking-container" id="container">
        <form>
          {!searched && (
            <div className="Tracking-Header">
              <h1>Track Parcel</h1>
              <span>Enter tracking number to trace your parcel's number</span>
              <br />
              <br />
            </div>
          )}
          <div className="search-bar">
            <input
              className="form tracking"
              type="text"
              placeholder="Tracking No."
              value={parcelNumber}
              onChange={(e) => setParcelNumber(e.target.value)}
            />
            <button
              type="button"
              className="btn tracking"
              style={{ marginTop: "7px" }}
              onClick={handleSearch} // Bind handleSearch function to onClick event
            >
              Search
            </button>
          </div>
          {/* Render tracking information if searched and trackingInfo is available */}
          {searched && trackingInfo && (
            <div className="Track-group">
              <div className="Track-formgroup">
                <label htmlFor="" className="sender">
                  <span>From:</span>
                  <h3>{trackingInfo.stamptime}</h3>
                  <span>{trackingInfo.senderAddress}</span>
                </label>
              </div>
              <div className="Track-formgroup">
                <br />
                <img src={arrow} alt="arrow" className="arrow-img" />
              </div>
              <div className="Track-formgroup">
                <label htmlFor="" className="receiver">
                  <span>To:</span>
                  <h3>{trackingInfo.receiver}</h3>
                  <span>{trackingInfo.receiverAddress}</span>
                </label>
              </div>
            </div>
          )}
          <br />
          <p>Latest status</p>
          <br />
          <ul className="events">
            {/* Render tracking event if searched and trackingInfo is available */}
            {searched && trackingInfo && (
              <li>
                <time>
                  {trackingInfo.stamptime}
                  <br />
                  <date>{trackingInfo.date}</date>
                </time>
                <span>
                  <strong>{trackingInfo.detail}</strong> {trackingInfo.dc_name}
                </span>
              </li>
            )}
          </ul>
        </form>
      </div>
    </div>
  );
}

export default ShippingForm;
