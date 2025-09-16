
import React from "react";
import { Container } from "react-bootstrap";

const OtherInfo = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-4">Travel Information</h2>

      <p>
        <strong>Check-in Procedures:</strong> Please arrive at the airport at least 2 hours prior to domestic flights. Have valid identification and your booking reference ready at the check-in counter.
      </p>

      <p>
        <strong>Baggage Rules:</strong> Carry-on baggage should not exceed the airline's size and weight limits. Checked baggage allowance varies by fare class. Fragile items should be packed carefully and declared at check-in if necessary.
      </p>

      <p>
        <strong>Security and Screening:</strong> All passengers are subject to security screening. Follow the instructions of security personnel and remove electronic devices and liquids from your carry-on when required.
      </p>

      <p>
        <strong>Health & Safety:</strong> Keep any necessary medications with you in your carry-on. If you have special health needs or require assistance, contact our support team in advance to arrange help at the airport or onboard.
      </p>

      <p>
        <strong>Local Customs & Culture:</strong> Lalibela is a site of great religious and historical significance. Dress respectfully when visiting churches and follow guidance from local authorities and guides.
      </p>
    </Container>
  );
};

export default OtherInfo;
