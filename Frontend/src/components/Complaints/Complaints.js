import React from "react";
import { Navbar } from "../index";
import "./Complaints.css"; // Import your CSS styles

class Complaints extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="Complaints-container">
          <div className="Complaints-form-container">
            <form>
              <h1>Complaints</h1>
              <span>Complain about your problem and explain details</span>
              <br />
              <br />
              <div className="form-group-row">
                <label
                  htmlFor="problemType"
                  className="col-sm-4 col-form-label"
                >
                  <span className="lb_IDCard">Select problem type</span>
                </label>
                <div className="enterdata">
                  <select id="problemType">
                    <option value="0">Transport time problem</option>
                    <option value="1">Poor service attitude</option>
                    <option value="2">Branch doesn't answer the phone</option>
                    <option value="3">Courier doesn't answer the phone</option>
                    <option value="4">Other problem</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="form-group-row">
                <label htmlFor="trackingNo" className="col-sm-4 col-form-label">
                  <span className="lb_IDCard">Tracking No.</span>{" "}
                  <span className="required">*</span>
                </label>
                <div className="enterdata">
                  <input
                    type="text"
                    id="trackingNo"
                    placeholder="Tracking No."
                  />
                </div>
              </div>
              <br />
              <div className="form-group-row">
                <label
                  htmlFor="description"
                  className="col-sm-4 col-form-label"
                >
                  <span className="lb_IDCard">Description</span>{" "}
                  <span className="required">*</span>
                </label>
                <div className="enterdata2">
                  <input
                    type="text"
                    id="description"
                    placeholder="Let us know your problems as detailed as possible so that we can assist you better"
                  />
                </div>
              </div>
              <br />
              <div className="form-group-row">
                <label
                  htmlFor="attachImage"
                  className="col-sm-4 col-form-label"
                >
                  <span className="lb_IDCard">Attach Image</span>{" "}
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
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Complaints;
