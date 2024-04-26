import React, { useState, useEffect } from "react";
import { Navbar } from "../index";
import "./Pickup.css";

function Pickup() {
  const [parcels, setParcels] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");


  useEffect(() => {
    fetchParcels();
    fetchProvinces();
  }, []);

  const fetchParcels = async () => {
    try {
      const response = await fetch("http://localhost:3333/pickup");
      const data = await response.json();
      console.log("Data:", data);
      setParcels(data);
    } catch (error) {
      console.error("Error fetching parcels:", error);
    }
  };

  const fetchProvinces = () => {
    fetch("http://localhost:3333/shipping")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          setProvinces(data.provinces);
        } else {
          console.error("Error fetching provinces:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching provinces:", error);
      });
  };

  const handleSelectorChange = (event) => {
    setSelectedProvince(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="Pickup-container" id="container">
        <div className="Pickup-form-container">
          <form>
            <h1 className="header">Pickup request</h1>
            <span>select location and date for pickup service</span>
            <br />
            <br />

            <div className="form-group row">
              <label htmlFor="" className="col-sm-4 col-form-label">
                <span className="lb_IDCard">Select parcel</span>
              </label>
              <div className="enterdata">
                <select id="selector">
                  {parcels &&
                    parcels.provinces &&
                    parcels.provinces.map((parcel) => (
                      <option key={parcel.id} value={parcel.id}>
                        {parcel.parcel_ID}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label htmlFor="" className="col-sm-4 col-form-label">
                <span className="lb_IDCard">Pickup date</span>
              </label>
              <div className="enterdata">
                <input type="date" />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label htmlFor="" className="col-sm-4 col-form-label">
                <span className="lb_IDCard">Pickup time</span>
              </label>
              <div className="enterdata">
                <select id="selector">
                  <option value="0">10:00 - 13:00</option>
                  <option value="1">13:00 - 15:00</option>
                  <option value="2">15:00 - 17:00</option>
                </select>
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label htmlFor="" className="col-sm-4 col-form-label">
                <span className="lb_IDCard">Pickup location detail</span>
              </label>
              <div className="enterdata">
                <input
                  type="Address details"
                  placeholder="Enter address details"
                />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <label htmlFor="" className="col-sm-4 col-form-label">
                <span className="lb_IDCard">
                  Provinces/District/Sub-district/zip code
                </span>
              </label>
              <div className="enterdata">
                <select
                  id="Province_Destination"
                  name="Province_Destination"
                  value={selectedProvince}
                  onChange={handleSelectorChange}
                >
                  <option value="">Select Destination Province</option>
                  {provinces.map((province) => (
                    <option key={province.code} value={province.code}>
                      {province.name_th}
                    </option>
                  ))}
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
