import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import img from "./MobileAction.png";
import Button from "react-bootstrap/Button";
import "./FrontDisplayComponent.css";
import "./ActionComponent.css";

const ActionComponent = () => {
  return (
    <div className="container-lg">
      <Row className="ms-5 mt-5 p-5">
        <Col>
          <Image
            src={img}
            alt="Mobile AI Image"
            rounded
            style={{ width: "500px", height: "800px", borderRadius: "20px" }}
          />
        </Col>
        <Col>
          <Button
            size="large"
            variant="secondary"
            className="actionButton ms-5"
          >
            Finding Information
          </Button>
          <div
            className="ms-5 mt-5 bg-dark text-white"
            style={{ width: "550px", borderRadius: "10px" }}
          >
            <h1 className="fw-bold text-center pt-3">Help Designers</h1>
            <p className="p-3 " style={{ fontSize: "20px" }}>
              AI-powered applications can analyze vast amounts of visual data
              and provide designers with inspiration for their creative
              projects.
            </p>
          </div>
          <Button
            size="large"
            variant="secondary"
            className="actionButton ms-5 mt-5"
          >
            Home Automation
          </Button>
          <Button
            size="large"
            variant="secondary"
            className="actionButton ms-5 mt-5"
          >
            Entertainment
          </Button>
          <Button
            size="large"
            variant="secondary"
            className="actionButton ms-5 mt-5"
          >
            Planning Assistance
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ActionComponent;
