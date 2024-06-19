import React from "react";

export default function HomeProjectsFooter(props) {
  const isLoaded = localStorage.getItem("loaded");
  return (
    <div
      className={
        !isLoaded
          ? "home-projects-footer home-projects-footer-fade-in"
          : "home-projects-footer"
      }
    >
      <p className="projects-subtitle">And that's not all!</p>
      <p className="projects-invitation">
        Please visit the Projects page on the navigation bar or check out my
        GitHub to see what else I have been up to!
      </p>
      <h3>Hope to hear from you soon!</h3>
    </div>
  );
}
