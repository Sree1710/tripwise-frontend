import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaMapMarkedAlt, FaCloudSun, FaShieldAlt } from 'react-icons/fa';

function FeaturesSection() {
  return (
    <Container className="py-5" id="how-it-works">
      <Row className="text-center mb-5">
        <Col>
          <h2 className="fw-bold" style={{ color: '#1e3a8a' }}>Why Travel with TripWise?</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="border-0 shadow-lg mb-4">
            <Card.Body>
              <FaMapMarkedAlt size={48} color="#2563eb" className="mb-3" />
              <Card.Title>Smart Itineraries</Card.Title>
              <Card.Text>Personalized AI-generated plans based on your interests and budget.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-lg mb-4">
            <Card.Body>
              <FaCloudSun size={48} color="#60a5fa" className="mb-3" />
              <Card.Title>Real-Time Intelligence</Card.Title>
              <Card.Text>Weather & safety alerts help you travel stress-free.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-lg mb-4">
            <Card.Body>
              <FaShieldAlt size={48} color="#38bdf8" className="mb-3" />
              <Card.Title>Safety First</Card.Title>
              <Card.Text>Travel with confidence using AI-powered local risk analysis.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FeaturesSection;
