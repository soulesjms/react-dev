import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.emailStatus = "test";
    this.state = { feedback: "", name: "", email: "", status: "" };
  }

  render() {
    let sendStatus;
    if (this.state.status === "success") {
      sendStatus = <Alert variant="success">Email successfully sent!</Alert>;
    } else if (this.state.status === "failed") {
      sendStatus = <Alert variant="danger">Email failed to send.</Alert>;
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>What's your email address?</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Ex: John@Doe.com"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Who are you?</Form.Label>
            <Form.Control
              name="name"
              placeholder="Ex: Joe Doe"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridMessage">
            <Form.Label>Email Message</Form.Label>
            <Form.Control
              name="feedback"
              as="textarea"
              rows="5"
              value={this.state.feedback}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
        </Form.Row>
        <div className="text-right">
          <Button type="submit">Send</Button>
        </div>
        {sendStatus}
      </Form>
    );
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    const templateId = "template_4eTBB6Q3";
    event.preventDefault();
    event.stopPropagation();

    if (event.currentTarget.checkValidity() === true) {
      this.sendFeedback(templateId, {
        message_html: this.state.feedback,
        from_name: this.state.name,
        reply_to: this.state.email
      });
    }
  };

  sendFeedback(templateId, variables) {
    console.log("sending feedback");
    window.emailjs
      .send("mark_soules", templateId, variables)
      .then(res => {
        this.setState({ status: "success" });
        console.log("Email successfully sent!");
      })
      .catch(err => {
        this.setState({ status: "failed" + err });
        console.error("Email Failed to send: ", err);
      });
  }
}

export default EmailForm;
