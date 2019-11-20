import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Banner from "./Banner";

import SocialMedia from "../Contact/SocialMedia";

class About extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Container className="mx-auto">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h2>About Me</h2>
              (Jonathan) Mark Soules loves programming, gaming, 3D Animation,
              Rock Climbing, and his family. He has a lovely wife and cute
              little 2 year-old girl. They currently are living in Glen Burnie,
              Maryland while Mark is working for the NSA.
            </Col>
            <Col md={{ span: 3, offset: 0 }}>
              <h2>Contact</h2>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
