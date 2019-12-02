import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import MyCarousel from "./MyCarousel";
import EmailForm from "../Contact/EmailForm";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <MyCarousel />
        <Container>
          <Row>
            <Col lg={{ span: 12 }}>
              <div className="skillz">
                This is a new website designed using ReactJS that is currently
                in development!
                <hr />
                I'm in the process of converting a project for my work at the
                NSA from AngularJS to ReactJS and in the meantime I've been
                working on this site to show off some of what I've learned so
                far.
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 4 }}>
              <div className="skillz">
                <h3>Web Development</h3>
                I can provide technologies such as HTML5, CSS3, jQuery,
                Javascript, SQL, PHP, Bootstrap, Angular, XML and more.
                <EmailForm />
              </div>
            </Col>
            <Col lg={{ span: 4 }}>
              <div className="skillz">
                <h3>Epic Designs</h3>
                One of my greatest passions is 3D design. All of the above
                images I designed and rendered using Blender 3D creation suite.
                <hr />
                <iframe
                  title="GS animation"
                  allowFullScreen
                  frameBorder="0"
                  height="250px"
                  src="https://www.youtube.com/embed/FRNxByC0B_s"
                  width="100%"
                ></iframe>
                This is an example of a logo animation I created using Blender.
              </div>
            </Col>
            <Col lg={{ span: 4 }}>
              <div className="skillz">
                <h3>Software Development</h3>
                As a software engineer I'm looking to build on my knowledge as a
                programmer. I have experience in C++, Java, and Python.
                <hr />
                <h3>My Work</h3>For a glimpse into what I can provide to you as
                a software developer, please refer to my{" "}
                <a href="/resume">Resume</a> page, and{" "}
                <a href="/code-examples">Code Examples</a> Pages.
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
