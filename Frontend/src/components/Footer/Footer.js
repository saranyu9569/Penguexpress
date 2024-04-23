import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"; // Make sure to import your CSS file

const Footer = () => {
  return (
    <div className="container">
      <main className="row">
        {/* Left Section */}
        <section className="col left">
          {/* Title */}
          <div className="contactTitle">
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
          </div>
          {/* Contact Info */}
          <div className="contactInfo">
            <div className="iconGroup">
              <div className="icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="details">
                <span>Phone</span>
                <span>+66 99 191 9861</span>
              </div>
            </div>
            <div className="iconGroup">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="details">
                <span>Email</span>
                <span>PenguExpress@gmail.com</span>
              </div>
            </div>
            <div className="iconGroup">
              <div className="icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon"/>
              </div>
              <div className="details">
                <span>Location</span>
                <span>Bang Phil, Samut Prakarn</span>
              </div>
            </div>
          </div>
          {/* Social Media */}
          <div className="socialMedia">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </section>

        {/* Right Section */}
        <section className="col right">
          {/* Form */}
          <form className="messageForm">
            <div className="inputGroup halfWidth">
              <input type="text" name="" required />
              <label>Your Name</label>
            </div>
            <div className="inputGroup halfWidth">
              <input type="email" name="" required />
              <label>Email</label>
            </div>
            <div className="inputGroup fullWidth">
              <input type="text" name="" required />
              <label>Subject</label>
            </div>
            <div className="inputGroup fullWidth">
              <textarea required></textarea>
              <label>Say Something</label>
            </div>
            <div className="inputGroup fullWidth">
              <button>Send Message</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Footer;