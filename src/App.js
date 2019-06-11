import React from "react";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { Tab, Tabs } from "react-bootstrap";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="home" id="uncontrolled-tab" className="navbar">
        <Tab eventKey="home" title="Home" className="nav-tab">
          <div
            className="container-home align-items-center"
            style={{ paddingTop: "2%" }}
          >
            <Home />
            <About />
            <Contact />
          </div>
        </Tab>
        <Tab eventKey="projects" title="Projects" className="nav-tab">
          <div className="">
            <Projects />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
