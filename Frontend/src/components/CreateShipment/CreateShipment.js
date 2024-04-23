import React from "react";
import { Navbar } from "../index";
import "./CreateShipment.css";
import axios from 'axios'

class CreateShipment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipientName: "",
      mobileNumber: "",
      addressDetails: "",
      province: "BKK", 
      itemType: "fruits", 
      weight: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
  
    // Destructure state variables for easier access
    const { recipientName, mobileNumber, addressDetails, province, itemType, weight } = this.state;
  
    // Create formData object
    const formData = {
      recipientName,
      mobileNumber,
      addressDetails,
      province,
      itemType,
      weight
    };

    function Calculate(){

      //weight 

      return 
    }
  
    try {
      // Make a POST request to the backend endpoint
      const response = await axios.post("http://localhost:3333/CreateShipment", formData);
      
      // Handle response
      console.log("Response:", response.data);
      // Optionally, you can perform any action based on the response, such as showing a success message or redirecting the user
    } catch (error) {
      // Handle error
      console.error("Error:", error);
      // Optionally, you can show an error message to the user
    }
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSelectorChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  

  render() {
    return (
      <>
        <Navbar />
        <div className="Create-container">
          <div className="form-container">
            <form>
              <h1>Create Shipment</h1>
              <span>Enter shipment information to create a shipment</span>
              <br />
              <div className="form-group-row">
                <label
                  htmlFor="recipientName"
                  className="col-sm-4 col-form-label"
                >
                  <span className="lb_IDCard">Recipient name</span>
                </label>
                <div className="enterdata">
                  <input
                    type="text"
                    id="recipientName"
                    placeholder="Enter recipient name"
                    value={this.state.recipientName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group-row">
                <label
                  htmlFor="mobileNumber"
                  className="col-sm-4 col-form-label"
                >
                  <span className="lb_IDCard">Mobile number</span>
                </label>
                <div className="enterdata">
                  <input
                    type="tel"
                    id="mobileNumber"
                    placeholder="Enter Mobile number"
                    value={this.state.mobileNumber}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group-row">
                <label
                  htmlFor="addressDetails"
                  className="col-sm-4 col-form-label"
                >
                  <span className="lb_IDCard">Address details</span>
                </label>
                <div className="enterdata">
                  <input
                    type="text"
                    id="addressDetails"
                    placeholder="Enter address details"
                    value={this.state.addressDetails}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group-row">
                <label htmlFor="province" className="col-sm-4 col-form-label">
                  <span className="lb_IDCard">
                    Provinces/District/Sub-district/zip code
                  </span>
                </label>
                <div className="enterdata">
                  <select
                    id="province"
                    value={this.state.province}
                    onChange={this.handleSelectorChange}
                  >
                    <option value="BKK">BKK</option>
                    <option value="SamutPrakarn">Samut Prakarn</option>
                  </select>
                </div>
              </div>
              <div className="form-group-row">
                <label htmlFor="itemType" className="col-sm-4 col-form-label">
                  <span className="lb_IDCard">Item Type</span>{" "}
                  <span className="required">*</span>
                </label>
                <div className="enterdata">
                  <select
                    id="itemType"
                    value={this.state.itemType}
                    onChange={this.handleSelectorChange}
                  >
                    <option value="fruits">Fruits</option>
                    <option value="babyProducts">Baby Products</option>
                    <option value="clothingAccessories">
                      Clothing Accessories
                    </option>
                    <option value="cosmeticBeauty">Cosmetic/Beauty</option>
                    <option value="freshFood">Fresh Food</option>
                    <option value="handTools">Hand Tools</option>
                    <option value="health">Health</option>
                    <option value="kitchenware">Kitchenware</option>
                    <option value="tree">Tree</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>
              <div className="form-group-row">
                <label htmlFor="weight" className="col-sm-4 col-form-label">
                  <span className="lb_IDCard">Weight (kg)</span>
                </label>
                <div className="enterdata">
                  <input
                    type="number"
                    id="weight"
                    placeholder="Enter weight in kg"
                    value={this.state.weight}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default CreateShipment;
