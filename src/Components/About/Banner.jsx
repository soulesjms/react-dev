import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import headshot from "./Headshot200x200.jpg";

class Banner extends Component {
  state = {};
  render() {
    return (
      <Jumbotron className="text-center">
        <Image src={headshot} roundedCircle />

        <h1>J. Mark Soules</h1>
        <div className="text-muted">
          <h3>Software Engineer for the National Security Agency.</h3>
          <h3>Web Developer and 3D design enthusiast.</h3>
        </div>
      </Jumbotron>
    );
  }
}

export default Banner;
