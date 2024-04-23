import React from "react";
import { Navbar } from "../index";
import "./CreateShipment.css";
import axios from "axios";

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
    const {
      recipientName,
      mobileNumber,
      addressDetails,
      province,
      itemType,
      weight,
    } = this.state;

    // Create formData object
    const formData = {
      recipientName,
      mobileNumber,
      addressDetails,
      province,
      itemType,
      weight,
    };

    function Calculate() {
      //weight

      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3333/CreateShipment",
        formData
      );

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
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
        <div class="Create-container" id="container">
          <div class="Create-form-container">
            <form>
              <h1>Create Shipment</h1>
              <span>enter shipments information for creat shipment</span>
              <br />
              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">
                  <span class="lb_IDCard">Recipient name</span>
                </label>
                <div class="enterdata">
                  <input
                    type="Recipient name"
                    placeholder="Enter recipient name"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">
                  <span class="lb_IDCard">Mobile number</span>
                </label>
                <div class="enterdata">
                  <input
                    type="Mobile number"
                    placeholder="Enter recipient mobile number"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">
                  <span class="lb_IDCard">Address details</span>
                </label>
                <div class="enterdata">
                  <input
                    type="Address details"
                    placeholder="Enter address details"
                  />
                </div>
              </div>
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
              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">
                  <span class="lb_IDCard">Item Type </span>{" "}
                  <span class="required">*</span>
                </label>
                <div class="enterdata">
                  <select id="selector">
                    <option value="0">fruits</option>
                    <option value="1">baby products</option>
                    <option value="2">clothing accessories</option>
                    <option value="3">cosmetic/beauty</option>
                    <option value="4">fresh food</option>
                    <option value="5">hand tools</option>
                    <option value="6">health</option>
                    <option value="7">kitchenware</option>
                    <option value="8">tree</option>
                    <option value="9">others</option>
                  </select>
                </div>
              </div>
              <br />
              <div class="form-group row">
                <label for="" class="col-sm-4 col-form-label">
                  <span class="lb_IDCard">Weight (kg)</span>
                </label>
                <div class="enterdata">
                  <input
                    type="Address details"
                    placeholder="Enter address details"
                  />
                </div>
              </div>
              <button>submit</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default CreateShipment;
