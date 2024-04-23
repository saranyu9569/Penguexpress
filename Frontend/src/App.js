import React from "react";
import { Navbar, Carousel, Footer } from "./components/index";
import "./App.css";
import missionImage from "./components/Carousel/assets/mission.jpg";
import visionImage from "./components/Carousel/assets/vision1.jpg";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <div class="wrapper">
        <h1>Our Services</h1>
        <p>We’re the leading parcel delivery company in the world.</p>
        <div class="content-box">
          <div class="card">
            <Link to="/Tracking">
              <i class="bx bxs-navigation"></i>
              <h2>Tracking Parcel</h2>
              <p>
                Keeps you in the loop with real-time package updates, making
                package monitoring effortless and stress-free.
              </p>
            </Link>
          </div>
          <div class="card">
            <Link to="/PriceEstimation">
              <i class="bx bxs-calculator"></i>
              <h2>Price Estimated</h2>
              <p>
                Easily estimatr your parcel delivery fee wtih our price
                estimation tool.
              </p>
            </Link>
          </div>
          <div class="card">
            <Link to="/CreateShipment">
              <i class="bx bxs-package"></i>
              <h2>Create Shipment</h2>
              <p>
                Simplifies the shipping process. Easily prepare and send items
                securely, whether it's for personal or business needs.
              </p>
            </Link>
          </div>
          <div class="card">
            <Link to="/PickUpRequest">
              <i class="bx bxs-car"></i>
              <h2>Pickup Request</h2>
              <p>
                Pickup Service is a service that customers can easily book the
                service to pick up parcels.
              </p>
            </Link>
          </div>
          <div class="card">
            <Link to="/Claim">
              <i class="bx bxs-error-alt"></i>
              <h2>Claim</h2>
              <p>
                Reporting and resolving damaged deliveries.ensuring quick
                compensation for any issues with your packages.
              </p>
            </Link>
          </div>
          <div class="card">
            <Link to="Complaints">
            <i class="bx bxs-chat"></i>
            <h2>Complaints</h2>
            <p>
              Simplifies reporting shipping issues. We streamline the process
              for quick resolution.
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div class="responsive-container-block bigContainer">
        <div class="responsive-container-block Container bottomContainer">
          <div class="ultimateImg">
            <img
              className="mainImg"
              src="https://static.vecteezy.com/system/resources/previews/014/529/820/original/cute-penguin-riding-scooter-penguin-delivery-3d-rendering-png.png"
            />
            <div class="purpleBox">
              <p class="purpleText">
                Thank you for choosing us for your delivery needs. We are
                honored to be your partner.
              </p>
              <img
                className="stars"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg"
              />
            </div>
          </div>
          <div class="allText bottomText">
            <p class="text-blk headingText">About Us</p>
            <p class="text-blk subHeadingText">
              we're dedicated to delivering more than just packages .
            </p>
            <p class="text-blk description">
              We're committed to delivering trust, reliability, and peace of
              mind. With a focus on efficiency, reliability, and customer
              satisfaction, we provide seamless express delivery services. Trust
              us to provide accurate tracking, timely updates, and responsive
              customer support.
            </p>
          </div>
        </div>
      </div>

      <div class="responsive-container-block bigContainer">
        <div class="responsive-container-block Container">
          <img className="mainImg" src={missionImage} />
          <div class="allText aboveText">
            <p class="text-blk headingText">Our Mission</p>
            <p class="text-blk subHeadingText">
              is to provide reliable, efficient, and customer-centric express
              delivery services
            </p>
            <p class="text-blk description">
              We prioritize customer satisfaction, foster innovation, empower
              our team.we aim to be the preferred choice for express delivery,
              delivering parcels with speed, accuracy, and excellence."
            </p>
            <button class="explore">Explore</button>
          </div>
        </div>
        <div class="responsive-container-block Container bottomContainer">
          <img className="mainImg" src={visionImage} />
          <div class="allText bottomText">
            <p class="text-blk headingText">Our Vision</p>
            <p class="text-blk subHeadingText" />
            to redefine the delivery
            <p class="text-blk description">
              by seamlessly connecting people and businesses with their
              packages, anytime and anywhere. We envision a future where
              shipping is not just about logistics, but about delivering joy,
              convenience, and reliability to our customers.
            </p>
            <button class="explore">Explore</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
