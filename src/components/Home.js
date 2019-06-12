import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <div className="home">
      <Container>
        <Row className="justify-content-center">
          <Col lg={4} md={4} sm={8} xs={8}>
            <Image
              src="https://avatars0.githubusercontent.com/u/18630847?s=460&v=4"
              className="responsive-img center"
              roundedCircle
            />
          </Col>
          <Col xs={12} md={8} lg={7} xl={7}>
            <h1 className="display-4">Ruslan Temirkhanov</h1>
            <h3
              className="display-3"
              style={{ fontSize: "2.5rem", paddingBottom: "2%" }}
            >
              Programmer
              <a
                href="https://github.com/Temirkhanov"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                {" "}
                <i class="fab fa-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/ruslan-temirkhanov-474a51111/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                {" "}
                <i class="fab fa-linkedin" />
              </a>
            </h3>
            <h5
              className="display-3"
              style={{ fontSize: "1.5rem", wordSpacing: "0.5rem" }}
            >
              Java | C++ | Python | SQL | JavaScript
            </h5>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
}
