import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { discoverLalibela } from "../data";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section
        className="hero-section d-flex align-items-center text-center text-md-start"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('/image/Front End Web Developer.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          minHeight: "80vh",
          padding: "80px 0",
        }}
      >
        
        <section className="relative h-16 bg-white">
          <div className="logo">
            <img src="/image/Ethiopian.jpg" alt="Ethiopian Airlines Logo" />
          </div>
        </section>

        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="display-4 fw-bold mb-3">
                Welcome to Lalibela Airlines
              </h1>
              <p className="lead mb-4">
                Fly to the heart of Ethiopia's heritage — explore the ancient
                rock-hewn churches of Lalibela.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Button
                  variant="light"
                  size="lg"
                  className="fw-semibold"
                  onClick={() => navigate("/flights")}
                >
                  ✈ Book a Flight
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="fw-semibold"
                  onClick={() => navigate("/hotels")}
                >
                   Book a Hotel
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      
      <Container className="my-5">
        <h2 className="mb-4 fw-bold text-center">Discover Lalibela</h2>

      
        <Row xs={1} md={3} className="g-4 mb-5">
          {discoverLalibela.map((item) => (
            <Col key={item.id}>
              <Card
                className="h-100 shadow-sm border-0 rounded-4 hover-card"
                style={{ transition: "transform 0.3s ease" }}
              >
                <Card.Img
                  variant="top"
                  src={item.imageUrl}
                  alt={item.title}
                  className="rounded-top-4"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{item.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        
        <Row className="mt-5">
          <Col className="text-center">
            <h3 className="mb-3 fw-bold">More About Lalibela</h3>
            <p className="text-muted fs-5">
              Lalibela is one of Ethiopia’s most treasured cultural and
              spiritual destinations. Its famous rock-hewn churches, carved
              from solid rock in the 12th and 13th centuries, are recognized
              as a UNESCO World Heritage Site.
            </p>
            <p className="text-muted fs-5">
              To explore guided tours, travel tips, and cultural experiences,
              check out Lalibela Ethiopia Tours for more information.
            </p>
            <Button
  variant="primary"
  size="lg"
  href="https://www.lalibelaethiopiatours.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="fw-semibold px-4 py-2 mb-5"
>
  🌍 Visit Lalibela Ethiopia Tours
</Button> 
          </Col>
        </Row>
      </Container>
      <Contact />
    </>
  );
};

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
            <Form.Group className="mb-3">
              <Form.Label>Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message *</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>

        <Col md={5}>
          <div className="ps-md-4">
            <h5>Contact Info</h5>
            <p>
              <strong>Address:</strong> 1 Heritage Ave, Lalibela, Ethiopia
            </p>
            <p>
              <strong>Phone:</strong> +251 33 336 0046
            </p>
            <p>
              <strong>Email:</strong> reservation@ethiopianairlines.com
            </p>

            <h6>Follow us</h6>
            <div className="d-flex gap-3 mt-2">
              <a href="@EAFpage">
                <FaFacebook size={24} />
              </a>
              <a href="@flyethiopian">
                <FaTwitter size={24} />
              </a>
              <a href="@fly.ethiopian">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export { Contact };
export default Home;
