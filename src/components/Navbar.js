import React from "react";

export default function Navbar({ loaded }) {
  const isLoaded = localStorage.getItem("loaded");
  return (
    <nav>
      <div
        className={!isLoaded ? "navbar-text navbar-text-fade" : "navbar-text"}
      >
        <a href="./">Home</a>
        <a href="./about">About me</a>
        <a href="./projects">Projects</a>
      </div>
      <div className="navbar-img">
        <a
          href="https://github.com/kizwolak"
          className={!isLoaded ? "img-bounce-1" : ""}
        >
          <img src="./images/github-mark.svg" alt="Github" />
        </a>
        <a
          href="https://github.com/kizwolak"
          className={!isLoaded ? "img-bounce-2" : ""}
        >
          <img
            src="./images/email-black-envelope-back-svgrepo-com.svg"
            alt="Github"
          />
        </a>
        <a
          href="https://github.com/kizwolak"
          className={!isLoaded ? "img-bounce-3" : ""}
        >
          <img src="./images/iconmonstr-linkedin-3.svg" alt="Github" />
        </a>
      </div>
    </nav>
  );
}
