import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <div>
      <div className="home" style={{ paddingTop: "1%" }}>
        <Container>
          <Row style={{ padding: "1%" }}>
            <Col xs={3} md={4} lg={5} xl={5}>
              <h5 className="display-3" style={{ fontSize: "1.5rem" }}>
                <i
                  class="fas fa-user-graduate"
                  style={{ paddingRight: "2%" }}
                />
                Queens College
              </h5>
            </Col>
            <Col xs={5} md={6} lg={7} xl={7}>
              <h5 className="display-3" style={{ fontSize: "1.5rem" }}>
                Bachelors Computer Science, <br />
                (Minor) Mathematics
              </h5>
            </Col>
          </Row>
          <Row style={{ padding: "1%" }}>
            <Col xs={3} md={4} lg={5} xl={5}>
              <h5 className="display-3" style={{ fontSize: "1.5rem" }}>
                <i
                  class="fas fa-user-graduate"
                  style={{ paddingRight: "2%" }}
                />
                Udacity
              </h5>
            </Col>
            <Col xs={5} md={6} lg={7} xl={7}>
              <h5 className="display-3" style={{ fontSize: "1.5rem" }}>
                Full Stack Web Developer
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
