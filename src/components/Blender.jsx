import { Component } from "react";
import Navbar from "./Navbar";
import "../App.css";

class Blender extends Component {
  state = {};
  render() {
    const imgs = ["sword", "headphones", "scythe", "donut", , "crime", "sheaffer"].map((img) => {
      return (
        <img
          src={`${img}.png`}
          alt=""
          style={{ height: "250px", borderRadius: "10px" }}
          className="shadow-lg hover:shadow-2xl hover:shadow-[#2B9194] m-2"
        />
      );
    });
    return (
      <div>
        <Navbar active="blender" />
        <p className="text-lg p-5 text-justify text-[#DCF6F6]">
          Along with being a fullstack web developer, I also work with Blender, a software for modelling, animation,
          texturing and rendering. It provides me a way to relax without being unproductive. I might not be an expert
          but I'm passionate about improving everyday. Below is a collection of my work fully created using Blender. See
          more of my work on
          {/* <a href="https://instagram.com/justanotherblenderer">
            <img src="instagram.svg" alt="instagram" style={{ height: "30px", display: "inline", marginLeft: "5px" }} />
          </a> */}
        </p>
        <div className="flex flex-wrap justify-around">{imgs}</div>
      </div>
    );
  }
}

export default Blender;
