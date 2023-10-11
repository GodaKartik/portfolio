import { Component } from "react";
import Navbar from "./Navbar";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar active="contact" />
      </div>
    );
  }
}

export default Contact;
