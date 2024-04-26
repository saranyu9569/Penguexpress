import React, { useState } from "react";
import { Navbar } from "../index";
import "./Complaints.css";
import axios from "axios";

const Complaints = () => {
  const [formData, setFormData] = useState({
    appeal_type: "Transport time problem",
    appeal_usertel: "",
    appeal_track: "",
    appeal_des: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(formData); // Log formData here
    axios
      .post("http://localhost:3333/complaints", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="Complaints-container">
        <div className="Complaints-form-container">
          <form onSubmit={handleSubmit}>
            <h1>Complaints</h1>
            <span>Complain about your problem and explain details</span>
            <br />
            <br />
            <div className="form-group-row">
              <label htmlFor="problemType" className="col-sm-4 col-form-label">
                <span className="lb_IDCard">Select problem type</span>
              </label>
              <div className="enterdata">
                <select
                  id="problemType"
                  name="appeal_type"
                  value={formData.appeal_type}
                  onChange={handleSelectChange}
                >
                  <option value="Transport time problem">
                    Transport time problem
                  </option>
                  <option value="Poor service attitude">
                    Poor service attitude
                  </option>
                  <option value="Branch doesn't answer the phone">
                    Branch doesn't answer the phone
                  </option>
                  <option value="Courier doesn't answer the phone">
                    Courier doesn't answer the phone
                  </option>
                  <option value="Other problem">Other problem</option>
                </select>
              </div>
            </div>
            <br />
            <div className="form-group-row">
              <label htmlFor="trackingNo" className="col-sm-4 col-form-label">
                <span className="lb_IDCard">Telephone Number</span>{" "}
                <span className="required">*</span>
              </label>
              <div className="enterdata">
                <input
                  type="text"
                  id="appeal_usertel"
                  name="appeal_usertel"
                  value={formData.appeal_usertel}
                  onChange={handleChange}
                  placeholder="Telephone Number"
                />
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
                  id="appeal_track"
                  name="appeal_track"
                  value={formData.appeal_track}
                  onChange={handleChange}
                  placeholder="Tracking No."
                />
              </div>
            </div>
            <br />
            <div className="form-group-row">
              <label htmlFor="description" className="col-sm-4 col-form-label">
                <span className="lb_IDCard">Description</span>{" "}
                <span className="required">*</span>
              </label>
              <div className="enterdata2">
                <input
                  type="text"
                  id="description"
                  name="appeal_des" // Add name attribute
                  value={formData.appeal_des}
                  onChange={handleChange}
                  placeholder="Let us know your problems as detailed as possible so that we can assist you better"
                />
              </div>
            </div>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Complaints;
