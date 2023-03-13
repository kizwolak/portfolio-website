import React from "react";

export default function HomeSkills() {
  return (
    <div className="home-skills">
      <h1>Here's what I can do:</h1>
      <div className="home-skill react">
        <p>React</p>
        <img src="./images/React-icon.svg" alt="React" />
      </div>
      <div className="home-skill javascript">
        <p>JavaScript</p>
        <img src="./images/logo-javascript.svg" alt="JavaScript" />
      </div>
      <div className="home-skill sass">
        <p>Sass</p>
        <img src="./images/Sass.svg" alt="Sass" />
      </div>
      <div className="home-skill accessibility">
        <p>APIs</p>
        <img src="./images/addon-extension-icon.svg" alt="API" />
      </div>
      <div className="home-skill testing">
        <p>Testing</p>
        <img src="./images/list-signs-svgrepo-com.svg" alt="Sass" />
      </div>
    </div>
  );
}
