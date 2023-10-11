import { Component } from "react";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";

class Projects extends Component {
  render() {
    const PROJECTS_LIST = [
      {
        title: "",
        description: "",
        stack: [],
        links: true,
      },
      {
        title: "",
        description: "",
        stack: [],
        links: true,
      },
      {
        title: "",
        description: "",
        stack: [],
        links: true,
      },
      {
        title: "",
        description: "",
        stack: [],
        links: true,
      },
      {
        title: "This Portfolio",
        description:
          "Crafted a simple portfolio website to present myself to recruiters and clients and also to showcase my React skills. During the process, I learnt about routing in React, Tailwind CSS and basic project management",
        stack: ["react", "tailwindcss", "vite"],
        links: true,
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
        <div className="flex flex-wrap p-3 justify-around">{create_project_cards}</div>
      </div>
    );
  }
}

export default Projects;
