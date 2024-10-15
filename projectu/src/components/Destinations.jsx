import React from "react";
import "./styles/Destinations.css";
import Image from "next/image";
import studentImage from "./writing.jpg"; // Replace with the correct path
import professionalImage from "./writing.jpg"; // Replace with the correct path
import writerImage from "./writing.jpg"; // Replace with the correct path

const Destinations = () => {
  return (
    <section className="destinations-section">
      <div className="container">
        {/* Section Heading */}
        <h2 className="section-title">Different Destinations</h2>
        <div className="row">
          <div className="col-lg-4">
            <p className="section-subtitle">
              We explore the diverse ways in which this technology can
              revolutionize work across various industries and fields.
            </p>
          </div>
          <div className="col-lg-4">
            <p className="section-subtitle">
              We explore the diverse ways in which this technology can
              revolutionize work across various industries and fields.
            </p>
          </div>
          <div className="col-lg-4 text-lg-right text-left">
            <p className="discover-link">
              Discover all applications <span className="arrow">→</span>
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="row mt-5">
          {/* Card 1 - Students */}
          <div className="col-md-4">
            <div className="destination-card">
              <Image
                src={studentImage}
                alt="Students"
                className="destination-image"
              />
              <button className="try-now-btn">Try it now</button>
              <h3 className="destination-title">Students</h3>
              <p className="destination-description">
                AI Ally can assist in research, provide learning materials, and
                answer questions.
              </p>
            </div>
          </div>

          {/* Card 2 - Professionals */}
          <div className="col-md-4">
            <div className="destination-card">
              <Image
                src={professionalImage}
                alt="Professionals"
                className="destination-image"
              />
              <button className="try-now-btn">Try it now</button>
              <h3 className="destination-title">Professionals</h3>
              <p className="destination-description">
                AI Ally can provide quick access to relevant information and
                other data analysis insights.
              </p>
            </div>
          </div>

          {/* Card 3 - Writers */}
          <div className="col-md-4">
            <div className="destination-card">
              <Image
                src={writerImage}
                alt="Writers"
                className="destination-image"
              />
              <button className="try-now-btn">Try it now</button>
              <h3 className="destination-title">Writers</h3>
              <p className="destination-description">
                AI Ally can help writers by generating ideas and suggesting
                improvements in writing style.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{display: "flex", justifyContent: "center", marginTop: "25px"}}>
          <button className="btn btn-success get-app-btn">And more than 50 other destinations</button>
      </div>
    </section>
  );
};

export default Destinations;
