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
      <p className="projects-disclaimer">
        I recommend viewing the projects on a computer, as most of them have not
        been made for mobile devices.
      </p>
      <div className="project-group">
        <p onClick={handleReactClick}>React</p>
        <div
          className={
            reactClick ? "hidden-project-group" : "project-group-display"
          }
        >
          <div className="project">
            <p className="project-title">The Big Shop</p>
            <p className="project-desc">
              A functional React shop with a working basket. I believe it may
              give you a sensible chuckle! <br />
              <a href="https://kizwolak.github.io/shopping-cart/">
                Click here to check it out!
              </a>
            </p>
          </div>
          <div className="project">
            <p className="project-title">This website</p>
            <p className="project-desc">
              This website has been fully built with React! It also contains
              some pretty cool (S)CSS effects, as well as some localStorage
              stuff to prevent the website from playing all the animations over
              and over again even after the website has already been visited.
              You are here!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
