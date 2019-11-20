import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class SocialMedia extends Component {
  render() {
    return (
      <Container>
        <Row>
          <a href="https://www.linkedin.com/in/j-mark-soules-b12412b0/">
            <i class="fa fa-linkedin w3-hover-opacity"></i>
            LinkedIn
          </a>
        </Row>
        <Row>
          <a href="https://www.facebook.com/jonathan.soules">
            <i class="fa fa-facebook-official"></i>
            Facebook
          </a>
        </Row>
        <Row>
          <a href="https://github.com/soulesjms">
            <i class="fa fa-github w3-hover-opacity"></i>
            Github
          </a>
        </Row>
      </Container>
    );
  }
}

export default SocialMedia;
