import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import Image from "next/image";
import img from "./mobile_desk.png";
import img2 from "./app.png";
import img1 from "./apple.png";

const FooterComponent = () => {
  return (
    <div
      className="container-lg bg-dark mt-4 text-white py-4 mb-2"
      style={{ borderRadius: "20px" }}
    >
      <Row>
        <h1 className="fw-bold mb-5">Choose your favorite plan</h1>
      </Row>
      <Row>
        <Col>
          <h5>Subscription level</h5>
        </Col>
        <Col className="text-center">
          <Button
            style={{
              width: "200px",
              borderRadius: "20px",
              backgroundColor: "#00d3a9",
            }}
          >
            <h5>Basic</h5>
          </Button>
        </Col>
        <Col className="text-center">
          <Button
            style={{
              width: "200px",
              borderRadius: "20px",
              backgroundColor: "#a500a5",
            }}
          >
            <h5>Advanced</h5>
          </Button>
        </Col>
        <Col className="text-center">
          <Button
            style={{
              width: "200px",
              borderRadius: "20px",
              backgroundColor: "#c9d500",
            }}
          >
            <h5>Premium</h5>
          </Button>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>Number of Users</Col>
        <Col className="text-center">1</Col>
        <Col className="text-center">Up to 5</Col>
        <Col className="text-center">Unlimited</Col>
      </Row>

      <Row className="mt-3">
        <Col>Customer Support</Col>
        <Col className="text-center">Online</Col>
        <Col className="text-center">Priority</Col>
        <Col className="text-center">Premium</Col>
      </Row>

      <Row className="mt-3">
        <Col>Monthly Requests</Col>
        <Col className="text-center">1000</Col>
        <Col className="text-center">5000</Col>
        <Col className="text-center">Unlimited</Col>
      </Row>

      <Row className="mt-3">
        <Col>Data Packages</Col>
        <Col className="text-center">1 GB</Col>
        <Col className="text-center">5 GB</Col>
        <Col className="text-center">10 GB</Col>
      </Row>

      <Row className="mt-3">
        <Col>Flexible Cancellation</Col>
        <Col className="text-center">Available</Col>
        <Col className="text-center">Available</Col>
        <Col className="text-center">Available</Col>
      </Row>

      <Row className="mt-3">
        <Col>Monthly Cost</Col>
        <Col className="text-center">$9.99</Col>
        <Col className="text-center">$19.99</Col>
        <Col className="text-center">$39.99</Col>
      </Row>
      <Row className="mt-5">
        {/* Column for the text */}
        <Col className="d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="fw-bold display-1">Try it right now</h1>
          <p style={{ fontSize: "18px", color: "#ffffff", maxWidth: "500px" }}>
            Download the AI Ally on the AppStore and the Google Play and
            discover the world of artificial intelligence! Enjoy innovative AI
            technologies directly on your device.
          </p>
          <div className="d-flex mt-3">
            <Image src={img1} alt="App Store" width={200} height={100} />
            <Image
              src={img2}
              alt="Google Play"
              width={200}
              height={100}
              className="ms-3"
            />
          </div>
        </Col>

        <Col className="d-flex justify-content-center">
          <Image src={img} alt="Mobile AI Image" width={500} height={600} />
        </Col>
      </Row>
    </div>
  );
};

export default FooterComponent;
