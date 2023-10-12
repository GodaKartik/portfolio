import { Component } from "react";
import Navbar from "./Navbar";
import "../App.css";

class Home extends Component {
  render() {
    const bulletClass = "p-1 text-xl list-bullets";
    return (
      <div>
        <Navbar active="home" />
        <div className="w-5/12 mx-auto mt-5">
          <p className="text-[#DCF6F6] w-fit">This is</p>
          <h1 className=" text-white text-6xl font-bold">Goda Kartik</h1>
        </div>
        <p className="w-5/12 p-3 mx-auto text-[#C4FDF0] mt-4 " id="caption">
          Computer Science student with passion for problem solving and strong foundations in algorithms, data
          structures and programming. I am eager to gain knowledge and work experience to leverage my skills, contribute
          to innovation and work in collaborative environments
        </p>
        <div className="flex bg-gradient-to-l from-[#2B9194] to-[#DCF6F6] mt-5 p-2">
          <div className="w-1/2 p-2 text-center my-auto">
            <h1 className="text-[#333333] text-3xl text-bold handwriting">What I do →</h1>
          </div>
          <div className="w-1/2 whatdo">
            <ul>
              <li className={bulletClass}>Backend Web Developemnt</li>
              <li className={bulletClass}>UI/UX Design</li>
              <li className={bulletClass}>Artificial Intelligence & Machine Learning</li>
              <li className={bulletClass}>Android App Development</li>
              <li className={bulletClass}>Data Visualisation</li>
            </ul>
          </div>
        </div>

        <div className="flex bg-gradient-to-r from-[#2B9194] to-[#DCF6F6] p-2 text-right">
          <div className="w-1/2 pt-1 mr-3">
            <img src="react.svg" alt="" style={{ height: "50px" }} className="inline mx-2" />
            <img src="vite.svg" alt="" style={{ height: "50px" }} className="inline mx-2" />
            <img src="linux.svg" alt="" style={{ height: "50px" }} className="inline mx-2" />
            <img src="mongodb.svg" alt="" style={{ height: "50px" }} className="inline mx-2" />
            <img src="python.svg" alt="" style={{ height: "50px" }} className="inline mx-2" />
            <img src="tenorflow.svg" alt="" style={{ height: "50px" }} className="inline mx-2" />
            <img src="django.svg" alt="" style={{ height: "50px" }} className="inline mx-2" />
            <img src="tailwindcss.svg" alt="" style={{ height: "50px" }} className="inline mx-2" />
            <img src="tensorflow.svg" alt="" style={{ height: "50px" }} className="inline mx-2" />
            <img src="openCV.svg" alt="" style={{ height: "50px" }} className="inline mx-2" />
            <img src="pytorch.svg" alt="" style={{ height: "50px" }} className="inline mx-2" />
          </div>
          <div className="w-1/2 p-2 text-center my-auto">
            <h1 className="text-[#333333] text-3xl text-bold handwriting">← What I know</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
