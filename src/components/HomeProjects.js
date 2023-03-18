import React from "react";
import { useBlazeSlider } from "react-blaze-slider";
import "blaze-slider/dist/blaze.css";

export default function HomeProjects() {
  const ref = useBlazeSlider({
    all: {
      enableAutoplay: true,
      stopAutoplayOnInteraction: false,
      autoplayInterval: 7000,
    },
  });
  const isLoaded = localStorage.getItem("loaded");
  return (
    <div
      className={
        !isLoaded ? "home-projects home-projects-fade-in" : "home-projects"
      }
    >
      <h2>And here is some stuff I've made:</h2>
      <div className="blaze-slider" ref={ref}>
        <div className="blaze-container">
          <div className="blaze-track-container">
            <div className="blaze-track">
              <div className="slide">
                <img src="./images/shopping.png" alt="Shop" />
                <p className="slide-desc">A functional shop page!</p>
              </div>
              <div className="slide">
                <img src="./images/battleships.png" alt="Shop" />
                <p className="slide-desc">A battleship game!</p>
              </div>
              <div className="slide">
                <img src="./images/todolist.png" alt="Shop" />
                <p className="slide-desc">A to-do list with localStorage!</p>
              </div>
              <div className="slide">
                <img src="./images/doctor.png" alt="Shop" />
                <p className="slide-desc">A doctor's website (a CSS flex)!</p>
              </div>
              <div className="slide">
                <img src="./images/memegen.png" alt="Shop" />
                <p className="slide-desc">A meme generator!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="projects-subtitle">And so much more!</h2>
      <p className="projects-invitation">
        Please visit the Projects page on the navigation bar or check out my
        GitHub to see what else I have been up to!
      </p>
      <h3>Hope to hear from you soon!</h3>
    </div>
  );
}
