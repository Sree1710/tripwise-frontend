import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './CSS/TravelNavbar.module.css';
import logo from './assets/tripwise-logo.png';
import { NAV_ITEMS } from './NavItems.jsx';

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
              display: 'block',
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav
            className="ms-auto"
            style={{ alignItems: 'center', display: 'flex', gap: '1.2rem' }}
          >
            {NAV_ITEMS.map((item) => (
              <Nav.Link
                key={item.label}
                href={item.href}
                className={item.label === 'Register' ? styles.registerNavLink : styles.navLinkCustom}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TravelNavbar;
