import React from "react";
import { Row, Col } from "react-bootstrap";

const TestimonialComponent = () => {
  return (
    <div className="container-lg mt-5">
      <Row className="mb-5">
        <Col>
          <h1 className="fw-bold">Testimonial</h1>
        </Col>
        <Col>
          <h5>
            “Don’t just take our word for it - hear from our satisfied clients
            who have experienced the transformative impact of our AI text tool
          </h5>
        </Col>
        <Col className="ms-5">
          <h5>
            Learn how this powerful tool has revolutionized their work and
            accelerated their success
          </h5>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p
            className="p-5"
            style={{
              backgroundColor: "rgb(126, 238, 103)",
              borderRadius: "10px",
              height: "25vh",
            }}
          >
            “The excellent voice recognition quality of AI Ally app makes it
            perfect for dictation and note taking. I have never come across such
            accuracy before”
            <p className="fw-bold mt-3">Craig Jordan CEO, Aveva</p>
          </p>
        </Col>
        <Col>
          <p
            className="p-5"
            style={{
              backgroundColor: "rgb(103, 195, 238)",
              borderRadius: "10px",
              height: "25vh",
            }}
          >
            “With the help of AI Ally, my work has become much easier and
            efficient. it provides quick and accurate answers to any questions I
            come across”
            <p className="fw-bold mt-3">David Smith Head of HR. Instill</p>
          </p>
        </Col>
        <Col>
          <p
            className="p-5"
            style={{
              backgroundColor: "rgb(12, 230, 157)",
              borderRadius: "10px",
              height: "25vh",
            }}
          >
            “I love how AI Ally personalizes to my needs and offers provides
            quick recommendations and solutions based on my preferences and
            behaviors”
            <p className="fw-bold mt-3">Marilyn Long UX Designer, Cyber Unit</p>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default TestimonialComponent;
