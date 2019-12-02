import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

//import images
import swordImage from "./Images/kiritosword4.png";
import violinImage from "./Images/violin.png";
import sparksImage from "./Images/sparksWOOT.png";
import gateImage from "./Images/GateKeeper.png";
import gsLogoImage from "./Images/GS-Logo-vignette.png";

class MyCarousel extends Component {
  render() {
    return (
      <Carousel fade={true}>
        <Carousel.Item>
          <img className="w-100" src={gsLogoImage} alt="First slide" />
          <Carousel.Caption className="text-dark">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100" src={sparksImage} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100" src={gateImage} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100" src={swordImage} alt="Fourth slide" />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100" src={violinImage} alt="Fifth slide" />
          <Carousel.Caption>
            <h3>Fifth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default MyCarousel;
