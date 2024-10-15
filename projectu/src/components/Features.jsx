import React from "react";
import "./styles/Features.css";
import Image from "next/image";
import chatImage from "./features.png"; // Replace with the correct path

const Features = () => {
  return (
    <section className="chat-options-section">
      <div className="container">
        <div className="row">
          {/* Chat Section */}
          <div className="col-lg-6 col-md-12">
            <Image src={chatImage} alt="Baker and customer" />
          </div>

          {/* Options Section */}
          <div className="col-lg-6 col-md-12 options-section">
            <div className="option">
              <div className="option-icon">&#128270;</div>
              <div className="option-text">Finding information</div>
            </div>

            <div className="option highlighted-option">
              <div className="option-icon">&#128640;</div>
              <div className="option-text">
                Help for designers
                <p className="option-description">
                  AI-powered applications can analyze vast amounts of visual
                  data and provide designers with inspiration for their creative
                  projects.
                </p>
              </div>
            </div>

            <div className="option">
              <div className="option-icon">&#127968;</div>
              <div className="option-text">Home automation</div>
            </div>

            <div className="option">
              <div className="option-icon">&#127916;</div>
              <div className="option-text">Entertainment</div>
            </div>

            <div className="option">
              <div className="option-icon">&#128197;</div>
              <div className="option-text">Planning assistance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
