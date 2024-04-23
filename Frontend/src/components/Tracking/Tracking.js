import React, { useState } from "react";
import { Navbar } from "../index";
import arrow from "./arrow-circle.svg";
import "./Tracking.css";

function ShippingForm() {
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    setSearched(true);
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
            />
            <button
              type="button"
              className="btn tracking"
              style={{ marginTop: "7px" }}
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          <div className="Track-group">
            <div className="Track-formgroup">
              <label htmlFor="" className="sender">
                <span>From:</span>
                <h3>Sender name</h3>
                <span>Provinces</span>
              </label>
            </div>

            <div className="Track-formgroup">
              <br />
              <img src={arrow} alt="arrow" className="arrow-img" />
            </div>
            <div className="Track-formgroup">
              <label htmlFor="" className="receiver">
                <span>To:</span>
                <h3>Receiver name</h3>
                <span>Provinces</span>
              </label>
            </div>
          </div>
          <br />
          <p>Latest status</p>
          <br />
          <ul className="events">
            <li>
              <time>
                15:37:00
                <br />
                <date>2024-04-12</date>
              </time>
              <span>
                <strong>Picked up</strong> branch name
              </span>
            </li>
            <li>
              <time>
                {" "}
                23:47:39
                <br />
                <date>2024-04-12</date>
              </time>
              <span>
                <strong>Arrived</strong> first distribution center name
              </span>
            </li>
            <li>
              <time>
                06:48:14
                <br />
                <date>2024-04-13</date>
              </time>
              <span>
                <strong>Departed</strong> first distribution center name
              </span>
            </li>
            <li>
              <time>
                16:51:16
                <br />
                <date>2024-04-13</date>
              </time>
              <span>
                <strong>Arrived</strong> second distribution center name
              </span>
            </li>
            <li>
              <time>
                08:52:30
                <br />
                <date>2024-04-14</date>
              </time>
              <span>
                <strong>On delivery</strong> Courier name: tel 09xxxxxxxxx
              </span>
            </li>

            <li>
              <time>
                10:02:31
                <br />
                <date>2024-04-14</date>
              </time>
              <span>
                <strong>Delivered</strong> Thank you for using Pengu Express
              </span>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default ShippingForm;
