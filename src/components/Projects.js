import React from "react";
import "../projects.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Projects() {
  const [reactClick, setReactClick] = React.useState(true);
  const [gamesClick, setGamesClick] = React.useState(true);
  const [toolsClick, setToolsClick] = React.useState(true);
  const [dataClick, setDataClick] = React.useState(true);
  const [testClick, setTestClick] = React.useState(true);
  const [miscelClick, setMiscelClick] = React.useState(true);
  const handleReactClick = () => {
    setReactClick((reactClick) => !reactClick);
  };
  const handleGamesClick = () => {
    setGamesClick((gamesClick) => !gamesClick);
  };
  const handleToolsClick = () => {
    setToolsClick((toolsClick) => !toolsClick);
  };
  const handleDataClick = () => {
    setDataClick((dataClick) => !dataClick);
  };
  const handleTestClick = () => {
    setTestClick((testClick) => !testClick);
  };
  const handleMiscelClick = () => {
    setMiscelClick((miscelClick) => !miscelClick);
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
              and over again even after the website has already been visited. It
              is also the first website I have developed with a mobile-first
              mindset. While the Doctor's Website works on mobiles, I learned
              the hard way why it is best to develop for mobiles first. <br />{" "}
              <a href="https://github.com/kizwolak/portfolio-website">
                Check out the code here!
              </a>
            </p>
          </div>
          <div className="project">
            <p className="project-title">A meme generator</p>
            <p className="project-desc">
              A silly little project I did to drill managing and updating state
              in React. The text often doesn't fit the memes, but sometimes the
              results can be quite funny. <br />
              <a href="https://kizwolak.github.io/meme-generator/">
                Click here to check it out!
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="project-group">
        <p onClick={handleGamesClick}>Games</p>
        <div
          className={
            gamesClick ? "hidden-project-group" : "project-group-display"
          }
        >
          <div className="project">
            <p className="project-title">Battleships</p>
            <p className="project-desc">
              A battleships game. Put your ships on the board and click away!
              It's got tons of cool features, like confirming your selection and
              a futuristic design. <br />
              <a href="https://kizwolak.github.io/battleships/dist/index.html">
                Click here to check it out!
              </a>
            </p>
          </div>
          <div className="project">
            <p className="project-title">Tic-tac-toe</p>
            <p className="project-desc">
              Tic-tac-toe. Modern, sleek and fast. Give it a go when you need to
              solve a personal problem with your best friend! <br />
              <a href="https://kizwolak.github.io/Tic-tac-toe">
                Click here to check it out!
              </a>
            </p>
          </div>
          <div className="project">
            <p className="project-title">Memory card</p>
            <p className="project-desc">
              A React memory card game featuring Chelsea legends. Can you get
              the high score? <br />
              <a href="https://kizwolak.github.io/memory-card">
                Click here to find out!
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="project-group">
        <p onClick={handleToolsClick}>Tools and apps</p>
        <div
          className={
            toolsClick ? "hidden-project-group" : "project-group-display"
          }
        >
          <div className="project">
            <p className="project-title">Weather app</p>
            <p className="project-desc">
              A weather app with a handy temperature converter, background
              images that show a photo of the looked-up city and even local
              time. Useful! <br />
              <a href="https://kizwolak.github.io/weather-app/dist/index.html/">
                Click here to check it out!
              </a>
            </p>
          </div>
          <div className="project">
            <p className="project-title">To-do list</p>
            <p className="project-desc">
              A to-do list that works with localStorage. You can give tasks
              priority, and the app also alerts the user when a task has
              expired. <br />
              <a href="https://kizwolak.github.io/To-do-list/dist/index.html">
                Click here to check it out!
              </a>
            </p>
          </div>
          <div className="project">
            <p className="project-title">Calculator</p>
            <p className="project-desc">
              One of my first projects. It's very girly! It also supports
              keyboard input for quicker calculations. <br />
              <a href="https://kizwolak.github.io/Calculator/">
                Click here to check it out!
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="project-group">
        <p onClick={handleDataClick}>Data structures</p>
        <div
          className={
            dataClick ? "hidden-project-group" : "project-group-display"
          }
        >
          <div className="project">
            <p className="project-title">Binary search tree</p>
            <p className="project-desc">
              A binary search tree project that checks if a tree is balanced,
              finds its min and max height, depth, finds the location of a value
              and more.
              <br />
              <a href="https://github.com/kizwolak/binary-search-tree">
                Click here to check it out!
              </a>
            </p>
          </div>
          <div className="project">
            <p className="project-title">Linked lists</p>
            <p className="project-desc">
              A linked list project that finds the index of a number, adds a
              value to the list, checks if a list contains a value and more.
              <br />
              <a href="https://github.com/kizwolak/linked-lists/blob/main/linkedLists.js">
                Click here to check it out!
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="project-group">
        <p onClick={handleTestClick}>Testing</p>
        <div
          className={
            testClick ? "hidden-project-group" : "project-group-display"
          }
        >
          <div className="project">
            <p className="project-title">JS testing practice</p>
            <p className="project-desc">
              Jest testing of some basic JS functions. Tests that check if a
              calculator works, if the right array values are returned and more.
              <br />
              <a href="https://github.com/kizwolak/testing-practice">
                Click here to check it out!
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="project-group">
        <p onClick={handleMiscelClick}>Miscellaneous</p>
        <div
          className={
            miscelClick ? "hidden-project-group" : "project-group-display"
          }
        >
          <div className="project">
            <p className="project-title">A doctor's website</p>
            <p className="project-desc">
              A fully responsive website designed for mobiles, tablets and
              computers. The slider I used is blaze-slider, which is the fastest
              slider ever. I also use it on this website's homepage! <br />
              <a href="https://kizwolak.github.io/Doctor-s-Website/">
                Click here to check it out!
              </a>
            </p>
          </div>
          <div className="project">
            <p className="project-title">An image slider</p>
            <p className="project-desc">
              My own JS image slider. Works well! Make sure to add your images
              to the code if you'd like to try it out. <br />
              <a href="https://github.com/kizwolak/image-slider">
                Click here to check it out!
              </a>
            </p>
          </div>
        </div>
      </div>
      <p className="project-info">
        Please keep in mind that I am always working on something new, so this
        list is not final. If you'd like to see what else I've been up to, visit
        my GitHub!
      </p>
      <Footer />
    </div>
  );
}
