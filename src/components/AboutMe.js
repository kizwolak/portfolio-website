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
        Hey there! Are you ready to meet a fresh and enthusiastic web developer?
        That's right, it's me! I may be new to the industry, but don't let that
        fool you, I have a passion for front-end web development that is second
        to none.
        <br />
        <br />
        In my past life, I was a medical and legal translator, but I knew I
        needed a change. I experimented with various programming languages until
        I stumbled upon web development, and something just clicked. It's like
        painting on an HTML canvas, and I can't get enough of it. I live for
        that feeling of solving a difficult problem, especially after spending
        days on it. It's a rush like no other!
        <br />
        <br />
        I'm always looking for ways to expand my skillset, which is why I
        recently dove headfirst into learning Node and MongoDB. And next on my
        list? Express! The more tools I have at my disposal, the better I can
        serve my clients.
        <br />
        <br />
        But enough about me. Let's talk about you! Do you need a website? Want
        to make it look fantastic and work flawlessly? Do you speak Polish,
        English, French, or even a bit of Spanish? Then look no further because
        I'm your guy! Contact me in any of these languages, and let's get
        started on creating a website that you'll be proud of.
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
