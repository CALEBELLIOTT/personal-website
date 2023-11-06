
import React, { useEffect, useState } from "react";
import { Col, Container, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import Header from "./components/Header";
import NameSticky from "./components/NameSticky/NameSticky";
import Biography from "./components/Biography/Biography";

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
    <div className="App">
      <div className="container mt-5">
        <Row>
          <Col md={6}>
            <NameSticky isMobile={isMobile} />
          </Col>
          <Col>
            <div className="mt-5 mt-md-0">
              <Biography />
            </div>
          </Col>
        </Row>
      </div>
    </div >
  );
}

export default App;
