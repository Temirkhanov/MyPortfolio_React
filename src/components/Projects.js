import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="projects" style={{ paddingTop: "2%", height: "100%" }}>
      <Container
        style={{
          float: "left",
          maxWidth: "98%",
          height: "100%",
          background: "none"
        }}
      >
        <Row className="scroll-row">
          <div className="scroll-container " style={{ height: "100%" }}>
            <ProjectCard
              projectName="Project 1"
              descr="THis is a descriptuion THis is a descriptuion THis is a descriptuionTHis is a descriptuion"
              gurl="https://github.com"
            />
          </div>
        </Row>
        <Row col={12} className="scroll-row">
          <div className="scroll-container">
            <h1>haha</h1>
          </div>
        </Row>
        <Row col={12} className="scroll-row">
          <div className="scroll-container">
            <h1>haha</h1>
          </div>
        </Row>
      </Container>
    </div>
  );
}
