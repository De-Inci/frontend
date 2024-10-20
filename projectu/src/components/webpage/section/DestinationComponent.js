import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import img from "./student.webp";
import img1 from "./prof.webp";
import img2 from "./writing_image.webp";
const DestinationComponent = () => {
  return (
    <div className="container-lg mt-5">
      <h1 className="fw-bold">Different Destinations</h1>
      <Row className="mt-4">
        <Col>
          <h4>
            We explore the diverse ways in which this technology can
            revolutionize work across various industries and fields{" "}
          </h4>
        </Col>
        <Col>
          <h4>
            Discover how AI can streamline processes and elevate your work to
            new heights
          </h4>
        </Col>
        <Col>
          <h4>Discover all applications </h4>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={6} md={4}>
          <Image
            src={img}
            alt="Mobile AI Image"
            rounded
            style={{ height: "300px", width: "350px", borderRadius: "20px" }}
          />
          <h2 className="mt-2 fw-bold">Student</h2>
          <p>
            AI Ally can assist in research, provide learning materials, and
            answer questions{" "}
          </p>
        </Col>
        <Col xs={6} md={4}>
          <Image
            src={img2}
            alt="Mobile AI Image"
            rounded
            style={{ height: "300px", width: "350px", borderRadius: "20px" }}
          />
          <h2 className="mt-2 fw-bold">Writer</h2>
          <p>
            AI Ally can assist in research, provide learning materials, and
            answer questions{" "}
          </p>
        </Col>
        <Col xs={6} md={4}>
          <Image
            src={img1}
            alt="Mobile AI Image"
            rounded
            style={{ height: "300px", width: "350px", borderRadius: "20px" }}
          />
          <h2 className="mt-2 fw-bold">Professionals</h2>
          <p>
            AI Ally can assist in research, provide learning materials, and
            answer questions{" "}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default DestinationComponent;
