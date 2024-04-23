import React from "react";
import { Navbar } from "../index";
import "./Tracking.css";

function ShippingForm() {
  return (
    <>
      <Navbar />
      <div className="Tracking-container" id="container">
        <div className="Tracking-form-container">
          <form>
            <h1>Shipping Rates</h1>
            <span>estimate your parcel delivery fee</span>
            <br />
            <br />
            <div className="group">
              <div className="form-group row">
                <label htmlFor="" className="col-sm-4 col-form-label">
                  <span className="lb_IDCard">Province origin</span>
                </label>
                <div className="enterdata">
                  <select id="originSelector">
                    <option value="0">Province0</option>
                    <option value="1">Province1</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="" className="col-sm-4 col-form-label">
                  <span className="lb_IDCard">Province destination</span>
                </label>
                <div className="enterdata">
                  <select id="destinationSelector">
                    <option value="0">Province0</option>
                    <option value="1">Province1</option>
                  </select>
                </div>
              </div>
            </div>

            <br />
            <div className="form-group row">
              <label htmlFor="" className="col-sm-4 col-form-label">
                <span className="lb_IDCard">Select package</span>
              </label>
              <div className="enterdata">
                <select id="packageSelector">
                  <option value="0">box</option>
                  <option value="1">seal bag</option>
                  <option value="0">envelope</option>
                </select>
              </div>
            </div>
            <br />
            <div className="group2">
              <div className="form-group row">
                <label htmlFor="" className="col-sm-4 col-form-label">
                  <span className="lb_IDCard">Width (cm.)</span>
                </label>
                <div className="enterdata">
                  <input type="width" placeholder="Parcel width" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="" className="col-sm-4 col-form-label">
                  <span className="lb_IDCard">Height (cm.)</span>
                </label>
                <div className="enterdata">
                  <input type="height" placeholder="Parcel height" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="" className="col-sm-4 col-form-label">
                  <span className="lb_IDCard">Length (cm.)</span>
                </label>
                <div className="enterdata">
                  <input type="length" placeholder="Parcel length" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="" className="col-sm-4 col-form-label">
                  <span className="lb_IDCard">Weight (kg.)</span>
                </label>
                <div className="enterdata">
                  <input type="weight" placeholder="Parcel weight" />
                </div>
              </div>
            </div>

            <br />
            <br />
            <label htmlFor="" className="c">
              <span>Delivery fee</span> <span className="xxx">xxx</span>{" "}
              <span> bath</span>
            </label>
            <br />
            <br />
            <button>submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ShippingForm;
