// src/components/Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark text-light py-4 mt-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0">© {year} Lalibela Airlines. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <Link to="/faq" className="text-light">
              FAQ
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
