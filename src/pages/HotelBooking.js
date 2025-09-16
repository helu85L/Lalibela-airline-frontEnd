
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { hotels } from "../data";

const HotelBooking = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-4">Hotels in Lalibela</h2>

      <Row xs={1} md={2} className="g-3">
        {hotels.map((hotel) => (
          <Col key={hotel.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={hotel.imageUrl}
                alt={hotel.name}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>{hotel.name}</Card.Title>
                <Card.Text>
                  <small className="text-muted">{hotel.location}</small>
                  <br />
                  {hotel.description}
                </Card.Text>
                <Button
                  variant="success"
                  href={hotel.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2"
                >
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HotelBooking;
