import React from "react";
import { Navbar } from "../index";
import "./ShippingRates.css";

function Estimation() {
  return (
    <div>
      <Navbar />
      <div class="Shipping-container">
        <div class="Shipping-form-container">
          <form>
            <h1>Shipping Rates</h1>
            <span>estimate your parcel delivery fee</span>
            <br />
            <br />
            <div class="group">
              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">
                  <span class="lb_IDCard">Province origin</span>
                </label>
                <div class="enterdata">
                  <select id="selector">
                    <option value="0">Province0</option>
                    <option value="1">Province1</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">
                  <span class="lb_IDCard">Province destination</span>
                </label>
                <div class="enterdata">
                  <select id="selector">
                    <option value="0">Province0</option>
                    <option value="1">Province1</option>
                  </select>
                </div>
              </div>
            </div>

            <br />
            <div class="form-group row">
              <label for="" class="col-sm-4 col-form-label">
                <span class="lb_IDCard">Select package</span>
              </label>
              <div class="enterdata">
                <select id="selector">
                  <option value="0">box</option>
                  <option value="1">seal bag</option>
                  <option value="0">envelope</option>
                </select>
              </div>
            </div>
            <br />
            <div class="group2">
              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">
                  <span class="lb_IDCard">Width (cm.)</span>
                </label>
                <div class="enterdata">
                  <input type="width" placeholder="Parcel width" />
                </div>
              </div>
              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">
                  <span class="lb_IDCard">Height (cm.)</span>
                </label>
                <div class="enterdata">
                  <input type="height" placeholder="Parcel height" />
                </div>
              </div>
              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">
                  <span class="lb_IDCard">Lenght (cm.)</span>
                </label>
                <div class="enterdata">
                  <input type="lenght" placeholder="Parcel lenght" />
                </div>
              </div>
              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">
                  <span class="lb_IDCard">Weight (kg.)</span>
                </label>
                <div class="enterdata">
                  <input type="weight" placeholder="Parcel weight" />
                </div>
              </div>
            </div>
            <br />
            <br />
            <label for="" class="c">
              <span>Delivery fee</span> <span class> xxx </span>
              <span> bath</span>
            </label>
            <br />
            <br />
            <button>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Estimation;
