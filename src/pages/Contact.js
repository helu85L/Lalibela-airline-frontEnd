
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all required fields (Name, Email, Message).");
      return;
    }

    
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Thank you! Your message has been submitted. (This is a demo alert.)");

   
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={7}>
          <h2 className="mb-4">Contact Us</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="contactName" className="mb-3">
              <Form.Label>Name *</Form.Label>
              <Form.Control type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="contactEmail" className="mb-3">
              <Form.Label>Email *</Form.Label>
              <Form.Control type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="contactMessage" className="mb-3">
              <Form.Label>Message *</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Write your message here..." value={message} onChange={(e) => setMessage(e.target.value)} required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>

        <Col md={5}>
          <div className="ps-md-4">
            <h5>Contact Info</h5>
            <p className="mb-1"><strong>Address:</strong> 1 Heritage Ave, Lalibela, Ethiopia</p>
            <p className="mb-1"><strong>Phone:</strong> +251 33 336 0046</p>
            <p className="mb-3"><strong>Email:</strong> reservation@ethiopianairlines.com</p>

            <h6>Follow us</h6>
            <div className="d-flex gap-3 mt-2">
              <a href="@EAFpage" aria-label="facebook" className="text-dark"><FaFacebook size={24} /></a>
              <a href="@flyethiopian" aria-label="twitter" className="text-dark"><FaTwitter size={24} /></a>
              <a href="@fly.ethiopian" aria-label="instagram" className="text-dark"><FaInstagram size={24} /></a>
              
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
