import { Component } from "react";
import Navbar from "./Navbar";
import "../App.css";
import ProjectCard from "./ProjectCard";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar active="home" />
      </div>
    );
  }
}

export default Home;
