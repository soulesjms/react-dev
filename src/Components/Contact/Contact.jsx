import React, { Component } from "react";
import SocialMedia from "./SocialMedia";
import EmailForm from "./EmailForm";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Contact extends Component {
  render() {
    return (
      <div>
        <Container className="mx-auto">
          <Row>
            <Col>
              <Card>
                <Card.Header as="h5">Contact Me:</Card.Header>
                <Card.Body>
                  <Card.Title>Send me a message</Card.Title>
                  <EmailForm />
                  <hr />
                  <span>You can also find me on social media!</span>
                  <SocialMedia />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
