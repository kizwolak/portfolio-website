import React from "react";
import "../homeskillsprojects.scss";

export default function HomeSkills() {
  const isLoaded = localStorage.getItem("loaded");
  return (
    <div className="home-skills">
      <p className={!isLoaded ? "skills-p-fade-in" : ""}>
        Here's what I can do:
      </p>
      <div
        className={
          !isLoaded ? "home-skill react left-center-react" : "home-skill react"
        }
      >
        <p>React</p>
        <img src="./images/React-icon.svg" alt="React" />
      </div>
      <div
        className={
          !isLoaded
            ? "home-skill javascript left-center-javascript"
            : "home-skill javascript"
        }
      >
        <p>JavaScript</p>
        <img src="./images/logo-javascript.svg" alt="JavaScript" />
      </div>
      <div
        className={
          !isLoaded ? "home-skill sass left-center-sass" : "home-skill sass"
        }
      >
        <p>Sass</p>
        <img src="./images/Sass.svg" alt="Sass" />
      </div>
      <div
        className={
          !isLoaded ? "home-skill api left-center-api" : "home-skill api"
        }
      >
        <p>APIs</p>
        <img src="./images/addon-extension-icon.svg" alt="API" />
      </div>
      <div
        className={
          !isLoaded
            ? "home-skill testing left-center-testing"
            : "home-skill testing"
        }
      >
        <p>Testing</p>
        <img src="./images/list-signs-svgrepo-com.svg" alt="Testing" />
      </div>
    </div>
  );
}
