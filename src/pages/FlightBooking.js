
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { flights } from "../data";

const FlightBooking = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false); // track if search was made

  const handleSearch = (e) => {
    e.preventDefault();

    if (!origin || !destination || !departureDate) {
      alert("Please fill Origin, Destination and Departure Date.");
      return;
    }

    const filtered = flights.filter((f) => {
      const originMatch = f.origin.toLowerCase().includes(origin.toLowerCase());
      const destMatch = f.destination.toLowerCase().includes(destination.toLowerCase());
      const dateMatch = departureDate ? f.departureDate === departureDate : true;
      return originMatch && destMatch && dateMatch;
    });

    setResults(filtered);
    setSearched(true);
  };

  const handleSelect = (flight) => {
    alert(
      `You selected flight ${flight.flightNumber} from ${flight.origin} to ${flight.destination} at ${flight.departureTime}.`
    );
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4">Search Flights</h2>
      <Card className="mb-4 p-3">
        <Form onSubmit={handleSearch}>
          <Row className="g-3">
            <Col md={4}>
              <Form.Group controlId="origin">
                <Form.Label>Origin</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. Addis Ababa"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="destination">
                <Form.Label>Destination</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. Lalibela"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="passengers">
                <Form.Label>Passengers</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="departureDate">
                <Form.Label>Departure Date</Form.Label>
                <Form.Control
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="returnDate">
                <Form.Label>Return Date (optional)</Form.Label>
                <Form.Control
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={4} className="d-flex align-items-end">
              <Button type="submit" variant="primary" className="w-100">
                Search Flights
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>

      <h3 className="mb-3">Results</h3>
      {!searched ? (
        <p>Fill the form and click "Search Flights".</p>
      ) : results.length === 0 ? (
        <p>No flights found. Try different dates or places.</p>
      ) : (
        <Row xs={1} md={2} className="g-3">
          {results.map((flight) => (
            <Col key={flight.id}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{flight.flightNumber}</Card.Title>
                  <Card.Text>
                    <strong>From:</strong> {flight.origin} <br />
                    <strong>To:</strong> {flight.destination} <br />
                    <strong>Departure:</strong> {flight.departureTime} on {flight.departureDate} <br />
                    <strong>Arrival:</strong> {flight.arrivalTime} <br />
                    <strong>Price:</strong> {flight.price} per passenger
                  </Card.Text>
                  <Button variant="success" onClick={() => handleSelect(flight)}>
                    Select
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default FlightBooking;
