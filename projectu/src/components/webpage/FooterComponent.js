import React from 'react';
import '../../Styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="subscription-plans">
        <h2>Explore your favorite plan</h2>
        <table>
          <thead>
            <tr>
              <th>Subscription Level</th>
              <th>Basic</th>
              <th>Advanced</th>
              <th>Premium</th>
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
              <td>$9.99</td>
              <td>$19.99</td>
              <td>$39.99</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="cta">
        <h3>Try it right now</h3>
        <p>
          Download the AI Ally on the Appstore and Google Play and discover the world of artificial intelligence! Enjoy innovative AI technologies directly on your device!
        </p>
        <div className="app-buttons">
          <a href="#" className="app-button">Download on the App Store</a>
          <a href="#" className="app-button">Get it on Google Play</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
