import React from "react";
import { Navbar } from "../index";
import "./CreateShipment.css";
import axios from "axios";

class CreateShipment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parcel_ID: "1",
      RecipientName: "",
      parcel_sender: "",
      parcel_receiver: "",
      shipping_cost: "",
      type: "",
      weight: "",
      Province_Origin: "",
      Province_Destination: "",
      provinces: [],
    };
  }

  componentDidMount() {
    this.fetchProvinces();
  }

  fetchProvinces = () => {
    fetch("http://localhost:3333/Shipping")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          this.setState({ provinces: data.provinces });
        } else {
          console.error("Error fetching provinces:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching provinces:", error);
      });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const calculatedValue = this.calculate();
    console.log("Form Data:", this.state);
  
    const data = {
      parcel_ID: this.state.parcel_ID, 
      weight: this.state.weight,
      type: this.state.type,
      shipping_cost: calculatedValue,
      parcel_sender: this.state.parcel_sender,
      parcel_receiver: this.state.parcel_receiver,
    };
  
    try {
      const response = await axios.post("http://localhost:3333/create", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response from backend:", response.data);
    } catch (error) {
      console.error("Error creating shipment:", error);
    }
  };
  

  calculate = () => {
    const { Province_Destination, Province_Origin, Weight } = this.state;
    let price = 0;
    const distance = Math.abs(Province_Origin - Province_Destination);
    let weight = parseFloat(this.state.weight);
    console.log(weight);
    if (weight <= 2) {
      if (distance <= 5) {
        price = 35;
      } else if (distance > 5) {
        price = 55;
      }
    } else if (weight <= 7) {
      if (distance <= 5) {
        price = 65;
      } else if (distance > 5) {
        price = 85;
      }
    } else if (weight <= 10) {
      if (distance <= 5) {
        price = 130;
      } else if (distance > 5) {
        price = 145;
      }
    } else if (weight <= 15) {
      if (distance <= 5) {
        price = 185;
      } else if (distance > 5) {
        price = 205;
      }
    } else if (weight <= 20) {
      if (distance <= 5) {
        price = 290;
      } else if (distance > 5) {
        price = 330;
      }
    } else if (weight <= 30) {
      if (distance <= 5) {
        price = 380;
      } else if (distance > 5) {
        price = 420;
      }
    } else {
      alert("Cannot used this Package Type!!!");
    }
    return price;
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSelectorChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  
    // Update data object with the selected value
    const data = { ...this.state };
    data[name] = value;
  
    // Now you can use this data object when submitting to the backend
    this.setState({ data }); // Optionally, you can set the updated data in state
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="Create-container" id="container">
          <div className="Create-form-container">
            <form onSubmit={this.handleSubmit}>
              <h1>Create Shipment</h1>
              <span>Enter shipment information to create shipment</span>
              <br />
              <div className="form-group row">
                <label
                  htmlFor="parcel_receiver"
                  className="col-sm-4 col-form-label"
                >
                  <span className="lb_IDCard">Sender Mobile number</span>
                </label>
                <div className="enterdata">
                  <input
                    id="parcel_sender"
                    name="parcel_sender"
                    value={this.state.parcel_sender}
                    onChange={this.handleChange}
                    type="tel"
                    placeholder="Enter recipient mobile number"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="Province" className="col-sm-4 col-form-label">
                  <span className="lb_IDCard">
                    Orginal Provinces
                  </span>
                </label>
                <div className="enterdata">
                  <select
                    id="Province_Origin"
                    name="Province_Origin"
                    value={this.state.Province_Origin}
                    onChange={this.handleSelectorChange}
                  >
                    <option value="">Select Origin Province</option>
                    {this.state.provinces.map((province) => (
                      <option key={province.code} value={province.code}>
                        {province.name_th}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="ZipCodeOriginal"
                  className="col-sm-4 col-form-label"
                >
                  <span className="lb_IDCard">Original ZipCode</span>
                </label>
                <div className="enterdata">
                  <input
                    id="OriginalZipCode"
                    name="OriginalZipCode"
                    value={this.state.OriginalZipCode}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Original ZipCode"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="RecipientName"
                  className="col-sm-4 col-form-label"
                >
                  <span className="lb_IDCard">Recipient name</span>
                </label>
                <div className="enterdata">
                  <input
                    name="RecipientName"
                    value={this.state.RecipientName}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Enter recipient name"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="parcel_receiver"
                  className="col-sm-4 col-form-label"
                >
                  <span className="lb_IDCard">Receiver Mobile number</span>
                </label>
                <div className="enterdata">
                  <input
                    id="parcel_receiver"
                    name="parcel_receiver"
                    value={this.state.parcel_receiver}
                    onChange={this.handleChange}
                    type="tel"
                    placeholder="Enter recipient mobile number"
                  />
                </div>
              </div>
              
              <div className="form-group row">
                <label htmlFor="Addrs" className="col-sm-4 col-form-label">
                  <span className="lb_IDCard">Address details</span>
                </label>
                <div className="enterdata">
                  <input
                    id="Addrs"
                    name="Addrs"
                    value={this.state.Addrs}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Enter address details"
                  />
                </div>
              </div>
              
              <div className="form-group row">
                <label htmlFor="Province" className="col-sm-4 col-form-label">
                  <span className="lb_IDCard">
                    Destination Provinces
                  </span>
                </label>
                <div className="enterdata">
                  <select
                    id="Province_Destination"
                    name="Province_Destination"
                    value={this.state.Province_Destination}
                    onChange={this.handleSelectorChange}
                  >
                    <option value="">Select Destination Province</option>
                    {this.state.provinces.map((province) => (
                      <option key={province.code} value={province.code}>
                        {province.name_th}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="ZipCodeDestination"
                  className="col-sm-4 col-form-label"
                >
                  <span className="lb_IDCard">Destination ZipCode</span>
                </label>
                <div className="enterdata">
                  <input
                    id="DestinationZipCode"
                    name="DestinationZipCode"
                    value={this.state.DestinationZipCode}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Destination ZipCode"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="ItemType" className="col-sm-4 col-form-label">
                  <span className="lb_IDCard">Item Type</span>{" "}
                  <span className="required">*</span>
                </label>
                <div className="enterdata">
                  <select
                    id="type"
                    name="type"
                    value={this.state.type}
                    onChange={this.handleSelectorChange}
                  >
                    <option value="fruits">fruits</option>
                    <option value="baby products">baby products</option>
                    <option value="clothing accessories">
                      clothing accessories
                    </option>
                    <option value="cosmetic/beauty">cosmetic/beauty</option>
                    <option value="fresh food">fresh food</option>
                    <option value="hand tools">hand tools</option>
                    <option value="health">health</option>
                    <option value="kitchenware">kitchenware</option>
                    <option value="tree">tree</option>
                    <option value="others">others</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="Weight" className="col-sm-4 col-form-label">
                  <span className="lb_IDCard">Weight (kg)</span>
                </label>
                <div className="enterdata">
                  <input
                    id="weight"
                    name="weight" // Keep this consistent with the state key
                    value={this.state.weight}
                    onChange={this.handleChange}
                    type="number"
                    placeholder="Enter weight in kilograms"
                  />
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default CreateShipment;
