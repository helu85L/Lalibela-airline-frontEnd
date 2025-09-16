// src/components/Navbar.js
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Lalibela Airlines
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="lalibela-navbar" />
        <Navbar.Collapse id="lalibela-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/flights">
              Flights
            </Nav.Link>
            <Nav.Link as={NavLink} to="/hotels">
              Hotels
            </Nav.Link>
            <Nav.Link as={NavLink} to="/faq">
              FAQ
            </Nav.Link>
            <Nav.Link as={NavLink} to="/info">
              Info
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
