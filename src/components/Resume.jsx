import { Component } from "react";
import Navbar from "./Navbar";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar active="resume" />
      </div>
    );
  }
}

export default Resume;
