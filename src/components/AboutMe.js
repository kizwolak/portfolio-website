import React from "react";
import Navbar from "./Navbar";
import "../aboutme.scss";
import Footer from "./Footer";

export default function AboutMe(props) {
  const loaded = props.loaded;
  return (
    <div className="about-me">
      <Navbar loaded={loaded} />
      <p className="about-header">Nice to meet you!</p>
      <p className="about-desc">
        I am a fresh web developer who (for now) specialises in the front-end. I
        used to be a medical and legal translator, but I decided to switch
        careers. After trying many different programming languages, something
        finally clicked when I tried web dev. Creating websites feels like
        painting on an HTML canvas. I love learning about it and solving
        problems is an incredible, addictive feeling - especially after spending
        multiple days on them! To expand my skillset, I plan to start learning
        Node and Express soon (though I may actually go into Ruby instead!). I
        speak Polish, English, French and some Rioplatense Spanish, so feel free
        to contact me in any of these languages!
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
          <h2>My hobbies</h2>
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
