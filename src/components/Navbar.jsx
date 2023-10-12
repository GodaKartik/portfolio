import { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Navbar extends Component {
  render() {
    const ACTIVE_TAB_STYLE = { color: "#2B9194", textDecoration: "underline" };
    return (
      <div className="w-full">
        <nav className="p-5 w-full text-right overflow-auto">
          <Link to="/" className="float-left text-5xl font-bold text-[#2B9194]" id="banner">
            GK
          </Link>

          <Link
            to="/"
            className="m-1 p-1 text-[#DCF6F6] hover:text-[#2B9194]"
            style={this.props.active === "home" ? ACTIVE_TAB_STYLE : {}}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="m-1 p-1 text-[#DCF6F6] hover:text-[#2B9194]"
            style={this.props.active === "projects" ? ACTIVE_TAB_STYLE : {}}
          >
            Projects
          </Link>
          <Link
            to="/hobbies"
            className="m-1 p-1 text-[#DCF6F6] hover:text-[#2B9194]"
            style={this.props.active === "blender" ? ACTIVE_TAB_STYLE : {}}
          >
            Blender
          </Link>
          <Link
            to="/contact"
            className="m-1 p-1 text-[#DCF6F6] hover:text-[#2B9194]"
            style={this.props.active === "contact" ? ACTIVE_TAB_STYLE : {}}
          >
            Contact
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
