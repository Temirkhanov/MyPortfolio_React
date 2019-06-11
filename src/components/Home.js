import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col lg={3} md={3} sm={4} xs={4}>
            <Image
              src="https://avatars0.githubusercontent.com/u/18630847?s=460&v=4"
              className="responsive-img"
              roundedCircle
            />
          </Col>
          <Col xs={5} md={6} lg={7} xl={7}>
            <h1>Ruslan Temirkhanov</h1>
            <h3 style={{ paddingBottom: "2%" }}>Programmer, Web-Developer</h3>
            <div style={{ borderTop: "0.2rem dotted white" }} />
            <div
              style={{
                paddingTop: "2%",
                wordSpacing: "4px",
                fontSize: "1.2rem"
              }}
            >
              C++ | Java | JS(MERN) | Python | SQL
            </div>
            <div>
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
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
