import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './CSS/TravelNavbar.module.css';
import logo from './assets/tripwise-logo.png'; // Adjust path if needed

function TravelNavbar() {
  return (
    <Navbar expand="lg" bg="white" className="py-3 shadow-sm">
      <Container fluid>
        <Navbar.Brand
          href="#"
          className={styles.navbarBrandCustom}
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <img
            src={logo}
            alt="TripWise Logo"
            style={{
              width: 72,
              height: 72,
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav className="ms-auto" style={{ alignItems: 'center' }}>
            <Nav.Link href="#how-it-works" className={styles.navLinkCustom}>
              How It Works
            </Nav.Link>
            <Nav.Link href="#contact" className={styles.navLinkCustom}>
              Contact Us
            </Nav.Link>
            <Nav.Link href="#login" className={styles.navLinkCustom}>
              Login
            </Nav.Link>
            <Nav.Link
              href="#register"
              className={`${styles.navLinkCustom} ${styles.registerLink}`}
              style={{ marginLeft: '0.8rem', fontWeight: '600' }}
            >
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TravelNavbar;
