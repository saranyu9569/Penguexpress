import React, { useState, useEffect } from "react";
import { Navbar } from "../index";
import "./ShippingRates.css";

function Estimation() {
  const [provinces, setProvinces] = useState([]);
  const [formData, setFormData] = useState({
    Province_Origin: { name: "กรุงเทพมหานคร", code: "10" },
    Province_Destination: { name: "กรุงเทพมหานคร", code: "10" },
    Select_Package: "box",
    Width: "",
    Height: "",
    Length: "",
    Weight: "",
  });
  const [deliveryFee, setDeliveryFee] = useState("xxx"); 
  useEffect(() => {
    fetchProvinces();
  }, []);

  const fetchProvinces = () => {
    fetch("http://localhost:3333/Shipping")
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

  const handleInputChange = (e) => {
    const name = e.target.name;
    const [selectedName, selectedCode] = e.target.value.split(":");
    setFormData({
      ...formData,
      [name]: { name: selectedName, code: selectedCode },
    });
  };

  const handleInputType = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value, // Update the value directly
    });
  };

  const handleCalculate = () => {
    const { Province_Origin, Province_Destination, Weight, Height, Select_Package, Length, Width} = formData;
    const Type = JSON.stringify(Select_Package);
    console.log("Origin Code:", Province_Origin.code);
    console.log("Type",Type);
    console.log("Destination Code:", Province_Destination.code);
    const size = parseFloat(formData.Length) + parseFloat(formData.Width) + parseFloat(formData.Height);
    const distance = Math.abs(Province_Origin.code - Province_Destination.code);
    console.log(distance);
    console.log(size);
    let price = 0;

    switch (Type) {
      case '"box"':
        if(size <= 40 && Weight <= 2){
          if(distance <= 5){
            price = 35;
          }else if(distance > 5){
            price = 55;
          }
        }else if(size <= 75 && Weight <= 7){
          if(distance <= 5){
            price = 65;
          }else if(distance > 5){
            price = 85;
          }
        }else if(size <= 105 && Weight <= 10){
          if(distance <= 5){
            price = 130;
          }else if(distance > 5){
            price = 145;
          }
        }else if(size <= 120 && Weight <= 15){
          if(distance <= 5){
            price = 185;
          }else if(distance > 5){
            price = 205;
          }
        }else if(size <= 150 && Weight <= 20){
          if(distance <= 5){
            price = 290;
          }else if(distance > 5){
            price = 330;
          }
        }else if(size <= 280 && Weight <= 30){
          if(distance <= 5){
            price = 380;
          }else if(distance > 5){
            price = 420;
          }
        }else{
          alert("Cannot used this Package Type!!!");
        }
        break;
      case '"seal bag"':
        if(size <= 65 && Weight <= 1){
          if(distance <= 5){
            price = 25;
          }else if(distance > 5){
            price = 35;
          }
        }else if(size <= 75 && Weight <= 4){
          if(distance <= 5){
            price = 40;
          }else if(distance > 5){
            price = 60;
          }
        }else if(size <= 85 && Weight <= 7){
          if(distance <= 5){
            price = 65;
          }else if(distance > 5){
            price = 80;
          }
        }else{
          alert("Cannot used this Package Type!!!");
        }
        break;
      case '"envelope"':
        if(size <= 55 && Weight <= 0.5){
          if(distance <= 5){
            price = 30;
          }else if(distance > 5){
            price = 50;
          }
        }else{
          alert("Cannot used this Package Type!!!");
        }
        break;
      default:
        console.log("Not control by any switch case");
        break;
    }
    setDeliveryFee(price);
  };

  return (
    <div>
      <Navbar />
      <div className="Shipping-container">
        <div className="Shipping-form-container">
          <form>
            <h1>Shipping Rates</h1>
            <span>estimate your parcel delivery fee</span>
            <br />
            <br />
            <div className="group">
              <div className="form-group row">
                <label
                  htmlFor="Province_Origin"
                  className="col-sm-4 col-form-label"
                >
                  <span className="lb_IDCard">Province origin</span>
                </label>
                <div className="enterdata">
                  <select
                    id="Province_Origin"
                    name="Province_Origin"
                    value={`${formData.Province_Origin.name}:${formData.Province_Origin.code}`}
                    onChange={handleInputChange}
                  >
                    {provinces.map((province) => (
                      <option
                        key={province.id}
                        value={`${province.name_th}:${province.code}`}
                      >
                        {province.name_th}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="Province_Destination"
                  className="col-sm-4 col-form-label"
                >
                  <span className="lb_IDCard">Province destination</span>
                </label>
                <div className="enterdata">
                  <select
                    id="Province_Destination"
                    name="Province_Destination"
                    value={`${formData.Province_Destination.name}:${formData.Province_Destination.code}`}
                    onChange={handleInputChange}
                  >
                    {provinces.map((province) => (
                      <option
                        key={province.id}
                        value={`${province.name_th}:${province.code}`}
                      >
                        {province.name_th}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <br />
            <div className="form-group row">
              <label
                htmlFor="Select_Package"
                className="col-sm-4 col-form-label"
              >
                <span className="lb_IDCard">Select package</span>
              </label>
              <div className="enterdata">
                <select
                  id="Select_Package"
                  name="Select_Package"
                  value={formData.Select_Package}
                  onChange={handleInputType}
                >
                  <option value="box">box</option>
                  <option value="seal bag">seal bag</option>
                  <option value="envelope">envelope</option>
                </select>
              </div>
            </div>
            <br />
            <div className="group2">
              <div className="form-group row">
                <label htmlFor="Width" className="col-sm-4 col-form-label">
                  <span className="lb_IDCard">Width (cm.)</span>
                </label>
                <div className="enterdata">
                  <input
                    type="text"
                    id="Width"
                    name="Width"
                    value={formData.Width}
                    onChange={handleInputType}
                    placeholder="Parcel width"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="Height" className="col-sm-4 col-form-label">
                  <span className="lb_IDCard">Height (cm.)</span>
                </label>
                <div className="enterdata">
                  <input
                    type="text"
                    id="Height"
                    name="Height"
                    value={formData.Height}
                    onChange={handleInputType}
                    placeholder="Parcel height"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="Length" className="col-sm-4 col-form-label">
                  <span className="lb_IDCard">Length (cm.)</span>
                </label>
                <div className="enterdata">
                  <input
                    type="text"
                    id="Length"
                    name="Length"
                    value={formData.Length}
                    onChange={handleInputType}
                    placeholder="Parcel length"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="Weight" className="col-sm-4 col-form-label">
                  <span className="lb_IDCard">Weight (kg.)</span>
                </label>
                <div className="enterdata">
                  <input
                    type="text"
                    id="Weight"
                    name="Weight"
                    value={formData.Weight}
                    onChange={handleInputType}
                    placeholder="Parcel weight"
                  />
                </div>
              </div>
            </div>
            <br />
            <br />
            <label htmlFor="deliveryFee" className="c">
              <span>Delivery fee</span>{" "}
              <span className="deliveryFeeValue">{deliveryFee}</span> 
              <span> bath</span>
            </label>
            <br />
            <br />
            <button type="button" onClick={handleCalculate}>
              Calculate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Estimation;
