import { Component } from "react";
import "../App.css";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";

class Projects extends Component {
  render() {
    const PROJECTS_LIST = [
      {
        title: "Emotion Analyser",
        description:
          "As a part of AI course project, created an NLP model using NLTK, a python natural language processing tool. The user is presented with an image and is asked to write his thoughts about it. These thoughts are used to analyse how the person is feeling/their emotion",
        stack: ["django", "python"],
        links: true,
        links_code: true,
        links_site: false,
        urls: ["https://github.com/GodaKartik/Emotion-Analyser", ""],
      },
      {
        title: "Face Unlock for Doors",
        description:
          "Built a model using CNN to recognize faces and use it as authorization to unlock doors. Can be used in offcies and academic intitutions ",
        stack: ["python", "openCV", "R Pi"],
      },
      {
        title: "This Portfolio",
        description:
          "Crafted a simple portfolio website to present myself to recruiters and clients and also to showcase my React skills. During the process, I learnt about routing in React, Tailwind CSS and basic project management",
        stack: ["react", "tailwindcss", "vite"],
        links: true,
        links_code: true,
        links_site: true,
        urls: ["https://github.com/GodaKartik/portfolio", "/"],
      },
      {
        title: "Leaf Disease Detection",
        description:
          "Constructed a tool which uses OpenCV to capture images of leaves and predict if they are infected or healthy. The model can also predict the disease of the leaf from among a set of diseases which were used for training",
        stack: ["opencv", "python", "tensorflow"],
        links: false,
        links_code: true,
        links_site: false,
        urls: ["", ""],
      },

      {
        title: "Stock Price Prediction",
        description:
          "Built a machine learning model using LSTM based neural networks. The model predicted stock prices of Apple and Amazon with an error of under $5",
        stack: ["tensorflow", "python"],
        links: false,
        links_code: true,
        links_site: false,
        urls: ["https://github.com/godakartik", ""],
      },
    ];

    const create_project_cards = PROJECTS_LIST.map((project) => {
      return <ProjectCard project={project} />;
    });
    return (
      <div>
        <Navbar active="projects" />
        {/* <ProjectCard
          project={{
            title: "test-title",
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi eos vel sequi illo debitis consequatur accusantium cupiditate ex, rerum natus deserunt vero, in incidunt ducimus voluptates qui? Illo qui, ratione facere ullam quibusdam molestias exercitationem voluptatem eum dolores, accusamus praesentium eius dolore? Numquam fugit reiciendis repellendus facere et ad quae?",
            stack: ["python", "react", "vite"],
            links: false,
          }}
        /> */}
        <div className="flex justify-evenly flex-wrap p-3 ">{create_project_cards}</div>
      </div>
    );
  }
}

export default Projects;
