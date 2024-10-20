import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import img from "./Mobile_Image.png";
import "./FrontDisplayComponent.css";

const FrontDisplayComponent = () => {
  return (
    <div className="container-lg mt-5  text-white justify-content-center">
      <Row className="bg-dark" style={{ borderRadius: "20px" }}>
        <Col className="ms-5 mt-5 p-5">
          <h1 style={{ fontSize: "7vh" }}>Unleash the full Potential of AI</h1>
          <p>
            AI Incident Management is the process of detecting, responding to,
            and resolving issues that arise from the deployment or operation of
            AI systems.
          </p>

          <Button size="large" className="buttonGet">
            Get Started
          </Button>
          <span className="fw-bold ms-1 p-3 mt-5" style={{ fontSize: "2vh" }}>
            <Button variant="dark" className="buttonget">
              More
            </Button>
          </span>
          <Row className="mt-5">
            <Col>
              <h2 className="fw-bold">4.8</h2>
              <h6>Rating on Appstore</h6>
            </Col>
            <Col>
              <h2 className="fw-bold">700k+</h2>
              <h6>Active Users</h6>
            </Col>
          </Row>
        </Col>
        <Col>
          <Image
            className="ms-5"
            src={img}
            alt="Mobile AI Image"
            width={500}
            height={600}
          />
        </Col>
      </Row>
    </div>
  );
};

export default FrontDisplayComponent;
