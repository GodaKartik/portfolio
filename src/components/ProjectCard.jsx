import { Component } from "react";
import "../App.css";

class ProjectCard extends Component {
  render() {
    const stack_item = this.props.project.stack.map((item) => {
      return (
        <td>
          <figure>
            <img
              src={`${item}.svg`}
              alt="stack-icon"
              className="p-1"
              style={{
                height: "60px",
                minWidth: "10%",
              }}
            />
            <figcaption className="text-center text-gray-600">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </figcaption>
          </figure>
        </td>
      );
    });
    return (
      <div className="m-2">
        <div className="card border border-black rounded-md p-3 max-w-sm mx-auto bg-gradient-to-b from-[#DCF6F6] to-[#2B9194] hover:shadow-xl hover:shadow-black h-80 ">
          <h1 className="font-extrabold text-center text-[#2B9194]">{this.props.project.title}</h1>
          <p className="text-center text-[#333333]">{this.props.project.description}</p>
          <table className="w-fit mx-auto">
            <tr>{stack_item}</tr>
          </table>
          <div
            style={{
              visibility: this.props.project.links ? "" : "hidden",
            }}
          >
            <button
              className="border rounded-md p-2 text-[#333333] bg-[#DCF6F6] hover:bg-[#333333] hover:text-[#DCF6F6]"
              style={{
                visibility: this.props.project.links_code ? "" : "hidden",
              }}
            >
              <a href={this.props.project.links_code ? this.props.project.urls[0] : ""}>Code</a>
            </button>
            <button
              className="border rounded-md p-2 text-[#333333] bg-[#DCF6F6] hover:bg-[#333333] hover:text-[#DCF6F6] float-right"
              style={{
                visibility: this.props.project.links_site ? "" : "hidden",
              }}
            >
              <a href={this.props.project.links_site ? this.props.project.urls[1] : ""}>Site</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
