import { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const ACTIVE_TAB_STYLE = { color: "white", textDecoration: "underline" };
    return (
      <div className="w-full">
        {/* <nav className="p-5 bg-black w-full text-right"> */}
        <nav
          className="p-5 w-full text-right"
          style={{
            backgroundImage: "linear-gradient(#000, #3f3f3f)",
          }}
        >
          <Link to="/" className="float-left font-bold text-xl px-3 text-white">
            Goda Kartik
          </Link>

          <Link
            to="/"
            className="m-1 p-1 text-gray-400 hover:text-white"
            style={this.props.active === "home" ? ACTIVE_TAB_STYLE : {}}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="m-1 p-1 text-gray-400 hover:text-white"
            style={this.props.active === "projects" ? ACTIVE_TAB_STYLE : {}}
          >
            Projects
          </Link>
          <Link
            to="/hobbies"
            className="m-1 p-1 text-gray-400 hover:text-white"
            style={this.props.active === "hobbies" ? ACTIVE_TAB_STYLE : {}}
          >
            Hobbies
          </Link>
          <Link
            to="/contact"
            className="m-1 p-1 text-gray-400 hover:text-white"
            style={this.props.active === "contact" ? ACTIVE_TAB_STYLE : {}}
          >
            Contact
          </Link>
          <Link
            to="/resume"
            className="m-1 p-1 text-gray-400 hover:text-white"
            style={this.props.active === "resume" ? ACTIVE_TAB_STYLE : {}}
          >
            Resume
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
