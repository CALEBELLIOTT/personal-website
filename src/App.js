
import React from "react";
import { Col, Container, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import Header from "./components/Header";
import NameSticky from "./components/NameSticky/NameSticky";

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <Row>
          <Col md={6}>
            <NameSticky />
          </Col>
          <Col>

          </Col>
        </Row>
      </div>
    </div >
  );
}

export default App;
