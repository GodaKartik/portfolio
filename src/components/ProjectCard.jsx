import { Component } from "react";
import "../App.css";

class ProjectCard extends Component {
  render() {
    const stack_item = this.props.project.stack.map((item) => {
      return (
        <td>
          <figure>
            <img
              src={`../../public/${item}.svg`}
              alt="stack-icon"
              className="p-1"
              style={{
                height: "50px",
                minWidth: "10%",
              }}
            />
            <figcaption className="text-center">{item.charAt(0).toUpperCase() + item.slice(1)}</figcaption>
          </figure>
        </td>
      );
    });
    return (
      <div>
        <div className="card border border-black rounded-md p-3 max-w-sm mx-auto">
          <h1 className="font-extrabold text-center">{this.props.project.title}</h1>
          <p className="text-center">{this.props.project.description}</p>
          <table className="w-fit mx-auto">
            <tr>{stack_item}</tr>
          </table>
          <div
            style={{
              visibility: this.props.project.links ? "" : "hidden",
            }}
          >
            <button className="border rounded-md p-2 text-black bg-zinc-300 hover:bg-zinc-800 hover:text-white float">
              Code
            </button>
            <button className="border rounded-md p-2 text-black bg-zinc-300 hover:bg-zinc-800 hover:text-white float-right">
              Link
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
