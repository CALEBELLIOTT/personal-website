
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import NameSticky from "./components/NameSticky/NameSticky";
import Biography from "./components/Biography/Biography";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

function App() {

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width < 768;

  return (
    <div className="App" id="app">
      <div className="container mt-5">
        <Row>
          <Col md={6}>
            <div className={!isMobile ? `name-sticky-container` : ''}>
              <NameSticky />
            </div>
          </Col>
          <Col md={6}>
            <div className="mt-5 mt-md-0" id='about-section'>
              <Biography />
            </div>
            <div className="experience-section" id='experience-section'>
              <Experience />
            </div>
            <div className="mt-5" id='projects-section'>
              <Projects />
            </div>
          </Col>
        </Row>
      </div>
    </div >
  );
}

export default App;
