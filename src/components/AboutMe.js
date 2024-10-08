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
        over 2 years ago. Seeing the results of my work in the DOM and being
        proud of what I learned made me fall in love with coding. After mutliple
        days of studying for 12 hours, I finally felt confident enough to send
        résumés 😄.
        <br />
        <br />
        My only commercial experience so far is in SQL and C#, but I've learnt so much
        about web development and computer science as a whole. 
        I feel like I found my dream career and I would love to be able to continue
        working hard on growing as a developer.
        <br />
        <br />
        I'm looking for a team where I can make a difference. I'd like to be able to
        help many users to enjoy a continuously improved experience using 
        the best technology. I'm an easygoing and reliable person - I'm sure I'll fit in!
      </p>
      <div className="about-skills">
        <h1>My skills</h1>
        <div className="about-coding-skils">
          <h2>Webdev skills</h2>
          <ul>
            <li>HTML + CSS/Sass</li>     
            <li>JavaScript</li>
            <li>React</li>
            <li>Express</li>       
            <li>C#</li>
            <li>SQL</li>
            <li>Git + GitHub</li>
            <li>Knowledge of accessibility practices</li>
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
              Native Polish, excellent command of English, advanced French and Spanish
            </li>
            <li>Strong group working skills</li>
          </ul>
        </div>
        <div className="about-hobbies">
          <h2>My hobbies and interests</h2>
          <ul>
            <li>History</li>
            <li>Photography</li>
            <li>Travel and anthropology</li>
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
