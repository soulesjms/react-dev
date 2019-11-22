import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class SocialMedia extends Component {
  render() {
    return (
      <Container>
        <Row>
          <a href="https://www.linkedin.com/in/j-mark-soules-b12412b0/">
            <i className="fa fa-linkedin"></i>
            LinkedIn
          </a>
        </Row>
        <Row>
          <a href="https://www.facebook.com/jonathan.soules">
            <i className="fa fa-facebook-official"></i>
            Facebook
          </a>
        </Row>
        <Row>
          <a href="https://github.com/soulesjms">
            <i className="fa fa-github"></i>
            Github
          </a>
        </Row>
        <Row>
          <a href="mailto: soulesjms@gmail.com">
            <i className="fa fa-envelope"></i>
            soulesjms@gmail.com
          </a>
        </Row>
      </Container>
    );
  }
}

export default SocialMedia;
