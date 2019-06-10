import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Contact() {
  return (
    <div style={{ paddingTop: "1%" }}>
      <Container>
        <Row style={{ padding: "1%" }}>
          <Col xs={3} md={4} lg={5} xl={5}>
            <h5>
              <i style={{ paddingRight: "2%" }} class="fas fa-map-marker-alt" />
              New York, NY
            </h5>
          </Col>
          <Col xs={5} md={6} lg={7} xl={7}>
            <h5>
              <i style={{ paddingRight: "2%" }} class="fas fa-at">
                {" "}
              </i>
              RUSL0424@GMAIL.COM
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
