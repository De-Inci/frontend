// components/SubscriptionPlans.js
import React from "react";
import "./styles/Footer.css";
import Image from "next/image";
import img from "./footer.png";
import appstore from "./appstore.png";
import playstore from "./playstore.png";

const Footer = () => {
  return (
    <section className="subscription-section">
      <div className="container text-left text-white py-5">
        <h2 className="mb-4">Explore your favorite plan</h2>
        <div className="table-responsive">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Subscription Level</th>
                <th><button style={{backgroundColor : "green"}}>Basic</button></th>
                <th><button style={{backgroundColor : "purple"}}>Advanced</button></th>
                <th><button style={{backgroundColor : "yellow"}}>Premium</button></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Number of Users</td>
                <td>1</td>
                <td>Up to 5</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Customer Support</td>
                <td>Online</td>
                <td>Priority</td>
                <td>Premium</td>
              </tr>
              <tr>
                <td>Monthly Requests</td>
                <td>1000</td>
                <td>5000</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Data Packages</td>
                <td>1 GB</td>
                <td>5 GB</td>
                <td>10 GB</td>
              </tr>
              <tr>
                <td>Flexible Cancellation</td>
                <td>Available</td>
                <td>Available</td>
                <td>Available</td>
              </tr>
              <tr>
                <td>Monthly Cost</td>
                <td><b>$9.99</b></td>
                <td><b>$19.99</b></td>
                <td><b>$39.99</b></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-5">
          <h3>Try it right now</h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p style={{maxWidth: "450px"}}>
                Download the AI Ally on the Appstore and Google Play and
                discover the world of artificial intelligence!
              </p>
              <div className="d-flex justify-content-start">
                <Image
                  src={appstore}
                  alt="Download on the App Store"
                  className="store-button mx-2"
                />
                <Image
                  src={playstore}
                  alt="Get it on Google Play"
                  className="store-button mx-2"
                />
              </div>
            </div>
            <div>
            <Image
                  src={img}
                  alt="Get it on Google Play"
                //   className="store-button mx-2"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
