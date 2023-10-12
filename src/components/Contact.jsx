import { Component } from "react";
import Navbar from "./Navbar";
import "../App.css";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar active="contact" />
        <div className="text-xl w-fit mx-auto justify-center mt-5 overflow-auto bg-[#DCF6F6] p-5 rounded-lg shadow-xl shadow-[#2B9194]">
          <div>
            <h2 style={{ display: "inline", whiteSpace: "pre" }} className="text-[#333333]">
              Phone -{" "}
            </h2>
            <p style={{ display: "inline" }}>+91 77998 87503</p>
          </div>
          <div>
            <h2 style={{ display: "inline", whiteSpace: "pre" }}>Email - </h2>
            <a href="mailto:godakartik@gmail.com" className="text-blue-700">
              godakartik@gmail.com
            </a>
          </div>
          <div>
            <h2 style={{ display: "inline", whiteSpace: "pre" }}>LinkedIn - </h2>
            <a href="https://linkedin.com/in/kartik-goda" className="text-blue-700">
              linkedin.com/in/kartik-goda
            </a>
          </div>
          <div>
            <h2 style={{ display: "inline", whiteSpace: "pre" }}>GitHub - </h2>
            <a href="https://github.com/krtikgoda" className="text-blue-700">
              github.com/KartikGoda
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
