import React, { Component } from "react";
import { Navbar } from "../index";
import "./Claim.css";

class Complaints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      trackingNo: "",
      description: "",
      file: [],
      producttype: "0",
      name: "",
      personalID: "",
      phoneNumber: "",
      email: "",
      productDescription: "",
      bankAccount: "0",
      nameBank: "",
      otherBankAccount: "",
      bankAccountNumber:"",
      bankNameHolder:"",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (input, e) => {
    this.setState({ [input]: e.target.value });
  };

  handleBankChange = (input, e) => {
    if (input === "bankAccount") {
      const value = e.target.value;
      if (value === "6") {
        this.setState({ [input]: value, otherBankAccount: "" });
      } else {
        this.setState({ [input]: value });
      }
    } else {
      this.setState({ [input]: e.target.value });
    }
  };

  handleFileChange = (e) => {
    
    const selectedFiles = e.target.files;
    const updatedFiles = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      updatedFiles.push(selectedFiles[i]);
    }
    this.setState({ files: updatedFiles });
  };

  // Function to handle submission
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", this.state);

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

  render() {
    const {
      step,
      trackingNo,
      productDescription,
      file,
      name,
      personalID,
      phoneNumber,
      email,
      producttype,
      bankAccount,
      otherBankAccount,
      bankAccountNumber,
      bankNameHolder,
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
                        id="NameClaimant"
                        value={name}
                        onChange={(e) => this.handleChange("name", e)}
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
                        id="PersonalID"
                        value={personalID}
                        onChange={(e) => this.handleChange("personalID", e)}
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
                        id="telephone"
                        value={phoneNumber}
                        onChange={(e) => this.handleChange("phoneNumber", e)}
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
                        id="email"
                        value={email}
                        onChange={(e) => this.handleChange("email", e)}
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="form-group-row">
                    <label
                      htmlFor="attachImage"
                      className="col-sm-4 col-form-label"
                    >
                      <span className="lb_IDCard">
                        Copy of ID Card / Passport (non-Thai citizen)
                      </span>{" "}
                      <span className="required">*</span>
                    </label>
                    <div className="enterdata">
                      <div className="file-loading" data-guid="">
                        <input
                          type="file"
                          accept=".png, .jpg, .pdf, .heic, .heif"
                          name="CID_File"
                          id="CID_File"
                          className="krajee"
                          data-filetype="CID"
                          form="excludeForm"
                          onChange={this.handleFileChange}
                          multiple
                        />
                      </div>
                      <span
                        className="field-validation-valid"
                        data-valmsg-for="CID_File"
                        data-valmsg-replace="false"
                      >
                        This field is required.
                      </span>
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
                        id="TrackNumber"
                        value={trackingNo}
                        onChange={(e) => this.handleChange("tracking", e)}
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
                        value={producttype}
                        onChange={(e) => this.handleChange("producttype", e)}
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
                        id="Description"
                        value={productDescription}
                        onChange={(e) =>
                          this.handleChange("productDescription", e)
                        }
                        placeholder="Desciption."
                      />
                    </div>
                  </div>
                  <div className="form-group-row">
                    <label
                      htmlFor="attachImage"
                      className="col-sm-4 col-form-label"
                    >
                      <span className="lb_IDCard">
                        Invoice / Receipt / Document to prove value of product
                      </span>{" "}
                      <span className="required">*</span>
                    </label>
                    <div className="enterdata">
                      <div className="file-loading" data-guid="">
                        <input
                          type="file"
                          accept=".png, .jpg, .pdf, .heic, .heif"
                          name="CID_File"
                          id="CID_File"
                          className="krajee"
                          data-filetype="CID"
                          form="excludeForm"
                          onChange={this.handleFileChange}
                          multiple
                        />
                      </div>
                      <span
                        className="field-validation-valid"
                        data-valmsg-for="CID_File"
                        data-valmsg-replace="false"
                      ></span>
                    </div>
                  </div>
                  <div className="form-group-row">
                    <label
                      htmlFor="attachImage"
                      className="col-sm-4 col-form-label"
                    >
                      <span className="lb_IDCard">
                        Photos of damaged products
                      </span>{" "}
                      <span className="required">*</span>
                    </label>
                    <div className="enterdata">
                      <div className="file-loading" data-guid="">
                        <input
                          type="file"
                          accept=".png, .jpg, .pdf, .heic, .heif"
                          name="CID_File"
                          id="CID_File"
                          className="krajee"
                          data-filetype="CID"
                          form="excludeForm"
                          onChange={this.handleFileChange}
                          multiple
                        />
                      </div>
                      <span
                        className="field-validation-valid"
                        data-valmsg-for="CID_File"
                        data-valmsg-replace="false"
                      >
                        *(Required if Damage)
                      </span>
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
                        value={bankAccount}
                        onChange={(e) =>
                          this.handleBankChange("bankAccount", e)
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
                    {bankAccount === "6" && (
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
                            id="otherBankAccount"
                            value={otherBankAccount}
                            onChange={(e) =>
                              this.handleChange("otherBankAccount", e)
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
                        id="BankAccountNumber"
                        value={bankAccountNumber}
                        onChange={(e) => this.handleChange("name", e)}
                        placeholder="Bank Account Number"
                      />
                    </div>
                  </div>
                  <div className="form-group-row">
                    <label
                      htmlFor="bankNameHolder"
                      className="col-sm-4 col-form-label"
                    >
                      <span className="lb_IDCard">Full Name of Account Holder</span>{" "}
                      <span className="required">*</span>
                    </label>
                    <div className="enterdata">
                      <input
                        type="text"
                        id="BankNameHolder"
                        value={bankNameHolder}
                        onChange={(e) => this.handleChange("name", e)}
                        placeholder="Full Name of Account Holder"
                      />
                    </div>
                  </div>
                  <div className="form-group-row">
                    <label
                      htmlFor="attachImage"
                      className="col-sm-4 col-form-label"
                    >
                      <span className="lb_IDCard">
                        Copy of Book Bank
                      </span>{" "}
                      <span className="required">*</span>
                    </label>
                    <div className="enterdata">
                      <div className="file-loading" data-guid="">
                        <input
                          type="file"
                          accept=".png, .jpg, .pdf, .heic, .heif"
                          name="CID_File"
                          id="CID_File"
                          className="krajee"
                          data-filetype="CID"
                          form="excludeForm"
                          onChange={this.handleFileChange}
                          multiple
                        />
                      </div>
                      <span
                        className="field-validation-valid"
                        data-valmsg-for="CID_File"
                        data-valmsg-replace="false"
                      >
                      </span>
                    </div>
                  </div>
                  <br />
                  <div className="text-prev2">
                    <button type="button" onClick={this.prevStep}>
                      <h2>Previous</h2>
                    </button>
                </div>
                <div className="text-submit">
                    <button type="submit">
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
