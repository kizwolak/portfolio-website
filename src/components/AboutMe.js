import React from "react";
import Navbar from "./Navbar";
import "../aboutme.scss";
import Footer from "./Footer";

export default function AboutMe(props) {
  const loaded = props.loaded;
  return (
    <div className="about-me">
      <img
        src="./images/profile-photo.jpg"
        alt="Profile"
        className="profile-photo"
      />
      <Navbar loaded={loaded} />
      <p className="about-header">Nice to meet you!</p>
      <p className="about-desc">
        My name is Krzysztof and I began my coding journey with JavaScript
        around 1 year ago. Seeing the results of my work in the DOM and being
        proud of what I learned made me fall in love with coding. After mutliple
        days of studying for 12 hours, I finally feel confident enough to send
        résumés 😄.
        <br />
        <br />
        The possibilities of web development are incredible, which is why I have
        also recently started learning the back-end to be able to create
        amazing, fully-fledged apps. I simply love learning about web
        development and I hope I will be able to show my passion to you.
      </p>
      <div className="about-skills">
        <h1>My skills</h1>
        <div className="about-coding-skils">
          <h2>Webdev skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML + CSS/Sass</li>
            <li>Git (moving the HEAD, merging, branching and more) + GitHub</li>
            <li>Knowledge of accessibility practices</li>
            <li>Data structures and algorithms</li>
            <li>Testing and debugging</li>
            <li>Working with RESTful APIs, async functions and promises</li>
            <li>Linters and formatters (primarily ESLint and Prettier)</li>
            <li>Hosting</li>
          </ul>
        </div>
        <div className="about-other-skills">
          <h2>Other skills</h2>
          <ul>
            <li>Extensive experience with Windows and Ubuntu</li>
            <li>
              Troubleshooting of applications and devices (even printers!)
            </li>
            <li>Experience with marketing as a freelancer</li>
            <li>
              Native Polish, excellent command of English, advanced French and
              intermediate Spanish
            </li>
            <li>Strong group working skills</li>
          </ul>
        </div>
        <div className="about-hobbies">
          <h2>My hobbies and interests</h2>
          <ul>
            <li>History</li>
            <li>Photography</li>
            <li>Travel and world cultures</li>
            <li>Cooking</li>
            <li>Skiing</li>
            <li>Football (or soccer, depending on who you ask!)</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
