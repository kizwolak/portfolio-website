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
          !isLoaded ? "home-skill javascript left-center-javascript" : "home-skill javascript"
        }
      >
        <p>JavaScript</p>
        <img src="./images/logo-javascript.svg" alt="JavaScript" />
      </div>
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
          !isLoaded ? "home-skill express left-center-express" : "home-skill express"
        }
      >
        <p>Express</p>
        <img src="./images/express.svg" alt="C#" />
      </div>
      <div
        className={
          !isLoaded ? "home-skill csharp left-center-csharp" : "home-skill csharp"
        }
      >
        <p>C#</p>
        <img src="./images/c-sharp.svg" alt="SQL" />
      </div>
      <div
        className={
          !isLoaded
            ? "home-skill sql left-center-sql"
            : "home-skill sql"
        }
      >
        <p>SQL</p>
        <img src="./images/sql.svg" alt="SQL" />
      </div>
    </div>
  );
}
