import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import errorImage from "./assets/404illustration.png";

export default function Travel404Page() {
  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background: "linear-gradient(135deg, #e0edff 60%, #f8fbff 100%)", // Tinted blue and white
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        minHeight: "100vh",
      }}
    >
      <Container
        className="shadow-lg p-4"
        style={{
          background: "#fff",
          borderRadius: "2rem",
          maxWidth: "800px",
          boxShadow: "0 2px 32px 0 #2563eb13",
        }}
      >
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img
              src={errorImage}
              alt="404 Travel Illustration"
              className="img-fluid"
              style={{
                maxHeight: "320px",
                filter: "drop-shadow(0 12px 36px #3b82f633)",
              }}
            />
          </Col>
          <Col md={6}>
            <h2 className="mb-3" style={{ color: "#1e40af", fontWeight: 700 }}>
              Lost your way?
            </h2>
            <p className="lead mb-4" style={{ color: "#283446ff" }}>
              The page you’re looking for doesn’t exist<br />
              or has wandered off on a new adventure.
            </p>
            <Button
              href="/"
              size="lg"
              style={{
                background: "linear-gradient(90deg,#3b82f6 60%,#2563eb 100%)",
                border: "none",
                color: "#fff",
                fontWeight: "600",
                borderRadius: "2rem",
                padding: "0.9rem 2.3rem",
                boxShadow: "0 2px 20px #2563eb40",
                transition: "background 0.25s",
              }}
              onMouseOver={e => (e.target.style.background = "#1e40af")}
              onMouseOut={e => (e.target.style.background = "linear-gradient(90deg,#3b82f6 60%,#2563eb 100%)")}
            >
              Back to Home
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
