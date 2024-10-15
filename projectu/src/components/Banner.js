import React from 'react';
import './styles/Banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import mobileImage from './banner_image.png';

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="banner-title">Unleash the full potential of AI</h1>
            <p className="banner-description">
              AI Ally is a versatile assistant that utilizes state-of-the-art
              natural language processing to provide real-time support and assistance across various domains.
            </p>
            <button className="btn btn-success get-app-btn">Get the App</button>
            <button className="btn btn-outline-secondary more-btn">More</button>
            <div className="app-info">
              <div>
                <span className="rating">4.8</span>
                <p>Rating on AppStore</p>
              </div>
              <div>
                <span className="active-users">700k+</span>
                <p>Active users</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <Image src={mobileImage } alt="Mobile with hand" className="mobile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
