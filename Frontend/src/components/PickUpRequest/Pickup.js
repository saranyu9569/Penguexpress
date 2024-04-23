import React from "react";
import { Navbar } from "../index";
import "./Pickup.css";

function Pickup() {
  return (
    <div>
      <Navbar />
      <div class="Pickup-container" id="container">
        <div className="Pickup-form-container">
          <form>
            <h1 className="header">Pickup request</h1>
            <span>select location and date for pickup service</span>
            <br />
            <br />

            <div class="form-group row">
              <label for="" class="col-sm-4 col-form-label">
                <span class="lb_IDCard">Select parcel</span>
              </label>
              <div class="enterdata">
                <select id="selector">
                  <option value="0">parcel0</option>
                  <option value="1">parcel1</option>
                  <option value="2">parcel2</option>
                </select>
              </div>
            </div>
            <br />
            <div class="form-group row">
              <label for="" class="col-sm-4 col-form-label">
                <span class="lb_IDCard">Pickup date</span>
              </label>
              <div class="enterdata">
                <input type="date" />
              </div>
            </div>
            <br />
            <div class="form-group row">
              <label for="" class="col-sm-4 col-form-label">
                <span class="lb_IDCard">Pickup time</span>
              </label>
              <div class="enterdata">
                <select id="selector">
                  <option value="0">10:00 - 13:00</option>
                  <option value="1">13:00 - 15:00</option>
                  <option value="2">15:00 - 17:00</option>
                </select>
              </div>
            </div>
            <br />
            <div class="form-group row">
              <label for="" class="col-sm-4 col-form-label">
                <span class="lb_IDCard">Pickup location detail</span>
              </label>
              <div class="enterdata">
                <input
                  type="Address details"
                  placeholder="Enter address details"
                />
              </div>
            </div>
            <br />
            <div class="form-group row">
              <label for="" class="col-sm-4 col-form-label">
                <span class="lb_IDCard">
                  Provinces/District/Sub-district/zip code
                </span>
              </label>
              <div class="enterdata">
                <select id="selector">
                  <option value="0">BKK</option>
                  <option value="1">Samut prakarn</option>
                </select>
              </div>
            </div>
            <br />
            <button>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Pickup;
