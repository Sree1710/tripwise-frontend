import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Example of 6 travel-themed image URLs from Unsplash
const images = [
  // Jodhpur Blue City - Perfect for your blue theme
  "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
  
  // Kerala Backwaters - Blue water and sky
  "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
  
  // Ladakh Mountains - Cool blue tones
  "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
  
  // Goa Beach - Blue ocean and sky
  "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
  
  // Rishikesh - River and mountains
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"
];






function HeroSection() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef();

  // Helper to clear and restart interval
  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 5000); // 5 seconds
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line
  }, []);

  // When current changes (by click), restart interval
  useEffect(() => {
    startInterval();
    // eslint-disable-next-line
  }, [current]);

  return (
    <div
      className="hero-section d-flex align-items-center"
      style={{
        minHeight: '90vh',
        background: `linear-gradient(rgba(219,234,254,0.7), rgba(96,165,250,0.7)), url(${images[current]}) center/cover no-repeat`,
        position: 'relative',
        overflow: 'hidden',
        transition: 'background-image 1s ease'
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={12}>
            <h1 className="display-3 fw-bold mb-3" style={{ color: '#1e3a8a' }}>
              Explore the World<br /> with <span style={{ color: '#135ebaff' }}>TripWise</span>
            </h1>
            <p className="lead mb-4" style={{ color: '#1e40af' }}>
              Plan and experience smooth, safe, and customized travels — right from your browser.
            </p>
          </Col>
        </Row>
      </Container>
      {/* Carousel indicator circles */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 12,
          zIndex: 2
        }}
      >
        {images.map((_, idx) => (
          <span
            key={idx}
            style={{
              display: 'inline-block',
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: idx === current ? '#2563eb' : '#dbeafe',
              border: idx === current ? '2px solid #1e3a8a' : '2px solid #93c5fd',
              transition: 'background 0.3s, border 0.3s',
              cursor: 'pointer'
            }}
            onClick={() => setCurrent(idx)} // Optional: enable click on indicators
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
