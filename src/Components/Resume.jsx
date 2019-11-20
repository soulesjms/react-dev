import React, { Component } from "react";
import ResumePDF from "../Resume-1.pdf";

class Resume extends Component {
  render() {
    return (
      <iframe
        title="resume"
        src={ResumePDF}
        width="100%"
        height="825px"
      ></iframe>
    );
  }
}

export default Resume;
