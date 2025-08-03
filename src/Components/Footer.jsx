import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="text-center shadow-sm py-4" id="contact" style={{ backgroundColor: '#f0f6ff' }}>
      <Container>
        <address className="mb-1" style={{ color: '#1e3a8a', fontSize: 16 }}>
          Contact us: <a href="mailto:tripwise@example.com" style={{ color: '#2563eb' }}>tripwise@example.com</a>
        </address>
        <p className="mb-0" style={{ color: '#60a5fa', fontSize: 14 }}>
          &copy; {new Date().getFullYear()} TripWise. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
