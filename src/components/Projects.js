import React from "react";
import "../projects.scss";
import Navbar from "./Navbar";

export default function Projects() {
  const [reactClick, setReactClick] = React.useState(true);
  const handleReactClick = () => {
    setReactClick((reactClick) => !reactClick);
    console.log(reactClick);
  };

  return (
    <div className="projects">
      <Navbar />
      <p className="projects-header">Here are some of my projects!</p>
      <div className="project-group">
        <p onClick={handleReactClick}>React</p>
        <div
          className={
            reactClick ? "hidden-project-group" : "project-group-display"
          }
        >
          <p>test</p>
          <p>test2</p>
        </div>
      </div>
    </div>
  );
}
