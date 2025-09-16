
import React from "react";
import { Container, Accordion } from "react-bootstrap";
import { faqs } from "../data";

const Faq = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-4">Frequently Asked Questions</h2>

      <Accordion defaultActiveKey="0">
        {faqs.map((item, idx) => (
          <Accordion.Item eventKey={`${idx}`} key={item.id}>
            <Accordion.Header>{item.question}</Accordion.Header>
            <Accordion.Body>{item.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default Faq;
