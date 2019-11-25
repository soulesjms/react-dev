import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Home">
          <span className="homeText">
            <h1>GS Software</h1>
            <h3>A software portfolio.</h3>
          </span>
        </div>
        <Container>
          <Row className="skillz">
            <Col sm={{ span: 12 }}>
              This is a new website designed using ReactJS that is currently in
              development! I'm in the process of converting a project for my
              work at the NSA from AngularJS to ReactJS and in the meantime I've
              been working on this site to show off some of what I've learned so
              far.
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 4 }}>
              <div className="skillz">
                <h3>Web Development</h3>
              </div>
            </Col>
            <Col md={{ span: 4 }}>
              <div className="skillz">
                <h3>Epic Designs</h3>
              </div>
            </Col>
            <Col md={{ span: 4 }}>
              <div className="skillz">
                <h3>Software Development</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
