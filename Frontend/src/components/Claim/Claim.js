import React, { Component } from "react";
import axios from "axios";
import { Navbar } from "../index";
import "./Claim.css";

class Complaints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      claim_ID: "1",
      claim_username: "",
      claim_userSSID: "",
      claim_usertel: "",
      claim_email: "",
      claim_type: "0",
      claim_parcelID: "",
      claim_des: "",
      claim_bankaccount: "0",
      bankAccount: "0",
      claim_banknum: "",
      claim_bankholdername: "",

    };
  }

  handleChange = (input, e) => {
    this.setState({ [input]: e.target.value });
  };

  handleBankChange = (input, e) => {
    if (input === "claim_bankaccount") {
      const value = e.target.value;
      if (value === "6") {
        this.setState({ [input]: value, bankaccount: "" });
      } else {
        this.setState({ [input]: value });
      }
    } else {
      this.setState({ [input]: e.target.value });
    }
  };

  // Function to navigate to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Function to navigate to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", this.state);
  
    // Fetch URL to your backend API
    const url = "http://localhost:3333/claim"; 
  
    // Prepare the data object
    const data = {
      claim_ID: this.state.claim_ID,
      claim_username: this.state.claim_username,
      claim_userSSID: this.state.claim_userSSID,
      claim_usertel: this.state.claim_usertel,
      claim_email: this.state.claim_email,
      claim_parcelID: this.state.claim_parcelID,
      claim_des: this.state.claim_des,
      claim_bankaccount: this.state.claim_bankaccount,
      claim_banknum: this.state.claim_banknum,
      claim_bankholdername: this.state.claim_bankholdername,
      claim_bookbank: this.state.claim_bookbank,
      claim_type: this.state.claim_type
    };
  
    axios
      .post(url, data)
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  

  render() {
    const {
      step,
      claim_username,
      claim_userSSID,
      claim_usertel,
      claim_email,
      claim_parcelID,
      claim_des,
      claim_bankaccount,
      claim_banknum,
      claim_bankholdername,
    } = this.state;
    return (
      <>
        <Navbar />
        <div className="Claim-container">
          <div className="Claim-form-container">
            <form onSubmit={this.handleSubmit}>
              <h1>Claim Form</h1>
              <br />
              <br />

              <div className="progress-bar">
                <div className="step-indicator">
                  <div className={step >= 1 ? "circle active" : "circle"}>
                    1
                  </div>
                  <span className="step-text">Claimant</span>
                </div>
                <div className="step-indicator">
                  <div className={step >= 2 ? "circle active" : "circle"}>
                    2
                  </div>
                  <span className="step-text">Consignment</span>
                </div>
                <div className="step-indicator">
                  <div className={step >= 3 ? "circle active" : "circle"}>
                    3
                  </div>
                  <span className="step-text">Bank Account</span>
                </div>
              </div>

              {step === 1 && (
                <div className="Input-Container">
                  <div className="form-group-row">
                    <label
                      htmlFor="NameClaimant"
                      className="col-sm-4 col-form-label"
                    >
                      <span className="lb_IDCard">Name of Claimant</span>{" "}
                      <span className="required">*</span>
                    </label>
                    <div className="enterdata">
                      <input
                        type="text"
                        id="claim_username"
                        value={claim_username}
                        onChange={(e) => this.handleChange("claim_username", e)}
                        placeholder="Name of Claiment"
                      />
                    </div>
                  </div>
                  <div className="form-group-row">
                    <label
                      htmlFor="PersonalID"
                      className="col-sm-4 col-form-label"
                    >
                      <span className="lb_IDCard">Thai ID/Passport</span>{" "}
                      <span className="required">*</span>
                    </label>
                    <div className="enterdata">
                      <input
                        type="text"
                        id="claim_userSSID"
                        value={claim_userSSID}
                        onChange={(e) => this.handleChange("claim_userSSID", e)}
                        placeholder="Thai ID/Passport"
                      />
                    </div>
                  </div>
                  <div className="form-group-row">
                    <label
                      htmlFor="Telephone"
                      className="col-sm-4 col-form-label"
                    >
                      <span className="Telephone">Phone Number</span>{" "}
                      <span className="required">*</span>
                    </label>
                    <div className="enterdata">
                      <input
                        type="telephone"
                        id="claim_usertel"
                        value={claim_usertel}
                        onChange={(e) => this.handleChange("claim_usertel", e)}
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="form-group-row">
                    <label htmlFor="Email" className="col-sm-4 col-form-label">
                      <span className="email">Email</span>{" "}
                      <span className="required">*</span>
                    </label>
                    <div className="enterdata">
                      <input
                        type="email"
                        id="claim_email"
                        value={claim_email}
                        onChange={(e) => this.handleChange("claim_email", e)}
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="text-next">
                    <button type="button" onClick={this.nextStep}>
                      <h2>Next</h2>
                    </button>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="Input-Container">
                  <div className="form-group-row">
                    <label
                      htmlFor="NameClaimant"
                      className="col-sm-4 col-form-label"
                    >
                      <span className="lb_IDCard">Tracking No.</span>{" "}
                      <span className="required">*</span>
                    </label>
                    <div className="enterdata">
                      <input
                        type="text"
                        id="claim_parcelID"
                        value={claim_parcelID}
                        onChange={(e) => this.handleChange("claim_parcelID", e)}
                        placeholder="Tracking No."
                      />
                    </div>
                  </div>
                  <div className="form-group-row">
                    <label for="" className="col-sm-4 col-form-label">
                      <span className="lb_IDCard">Product Type </span>{" "}
                      <span className="required">*</span>
                    </label>
                    <div className="enterdata">
                      <select
                        id="selector"
                        value={this.state.claim_type} // Access claim_type from component state
                        onChange={(e) => this.handleChange("claim_type", e)}
                      >
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
                  <div className="form-group-row">
                    <label
                      htmlFor="Description"
                      className="col-sm-4 col-form-label"
                    >
                      <span className="lb_IDCard">Product Description</span>{" "}
                      <span className="required">*</span>
                    </label>
                    <div className="enterdata">
                      <input
                        type="text"
                        id="claim_des"
                        value={claim_des}
                        onChange={(e) => this.handleChange("claim_des", e)}
                        placeholder="Desciption."
                      />
                    </div>
                  </div>
                  <br />
                  <div className="text-prev1">
                    <button
                      type="button"
                      onClick={this.prevStep}
                      className="prev"
                    >
                      <h2>Previous</h2>
                    </button>
                  </div>
                  <div className="text-next2">
                    <button
                      type="button"
                      onClick={this.nextStep}
                      className="next"
                    >
                      <h2>Next</h2>
                    </button>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="Input-Container">
                  <div className="form-group-row">
                    <label
                      htmlFor="selector"
                      className="col-sm-4 col-form-label"
                    >
                      <span className="lb_IDCard">Bank Account</span>{" "}
                      <span className="required">*</span>
                    </label>
                    <div className="enterdata">
                      <select
                        id="selector"
                        value={claim_bankaccount}
                        onChange={(e) =>
                          this.handleBankChange("claim_bankaccount", e)
                        }
                      >
                        <option value="0">Kasikorn Bank</option>
                        <option value="1">Krungthai Bank</option>
                        <option value="2">TMBThanachart Bank</option>
                        <option value="3">Krungsri Bank</option>
                        <option value="4">Bangkok Bank</option>
                        <option value="5">Citi Bank</option>
                        <option value="6">Others</option>
                      </select>
                    </div>
                    {claim_bankaccount === "6" && (
                      <div className="form-group-row">
                        <label
                          htmlFor="otherBankAccount"
                          className="col-sm-4 col-form-label"
                        >
                          <span className="lb_IDCard">Other Bank Account</span>{" "}
                          <span className="required">*</span>
                        </label>
                        <div className="enterdata">
                          <input
                            type="text"
                            id="claim_bankaccount"
                            value={claim_bankaccount}
                            onChange={(e) =>
                              this.handleChange("claim_bankaccount", e)
                            }
                            placeholder="Name of Bank"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="form-group-row">
                    <label
                      htmlFor="bankAccountNumber"
                      className="col-sm-4 col-form-label"
                    >
                      <span className="lb_IDCard">Bank Account Number</span>{" "}
                      <span className="required">*</span>
                    </label>
                    <div className="enterdata">
                      <input
                        type="text"
                        id="claim_banknum"
                        value={claim_banknum}
                        onChange={(e) => this.handleChange("claim_banknum", e)}
                        placeholder="Bank Account Number"
                      />
                    </div>
                  </div>
                  <div className="form-group-row">
                    <label
                      htmlFor="bankNameHolder"
                      className="col-sm-4 col-form-label"
                    >
                      <span className="lb_IDCard">
                        Full Name of Account Holder
                      </span>{" "}
                      <span className="required">*</span>
                    </label>
                    <div className="enterdata">
                      <input
                        type="text"
                        id="claim_bankholdername"
                        value={claim_bankholdername}
                        onChange={(e) =>
                          this.handleChange("claim_bankholdername", e)
                        }
                        placeholder="Full Name of Account Holder"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="text-prev2">
                    <button type="button" onClick={this.prevStep}>
                      <h2>Previous</h2>
                    </button>
                  </div>
                  <div className="text-submit">
                    <button type="submit" onClick={this.handleSubmit}>
                      <h2>Finish</h2>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Complaints;
