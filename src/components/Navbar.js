import React from "react";
import { Link } from "react-router-dom";
import "../navbar.scss";

export default function Navbar({ loaded }) {
  const isLoaded = localStorage.getItem("loaded");
  const handleEmailClick = () => {
    setTimeout(() => {
      const contactForm = document.querySelector(".contact-form");
      contactForm.scrollIntoView();
    }, 100);
  };
  return (
    <nav>
      <div
        className={
          !isLoaded ? `navbar-links navbar-links-fade` : `navbar-links`
        }
      >
        <a href="./">Home</a>
        <a href="./#/about">About me</a>
        <a href="./#/projects">Projects</a>
      </div>
      <div className="navbar-img">
        <a
          href="https://github.com/kizwolak"
          className={!isLoaded ? "img-bounce-1" : ""}
        >
          <img src="./images/github-mark.svg" alt="Github" />
        </a>
        <Link to="/#">
          {" "}
          <button
            onClick={handleEmailClick}
            className={!isLoaded ? "img-bounce-2" : ""}
          >
            <img
              src="./images/email-black-envelope-back-svgrepo-com.svg"
              alt="Email"
            />
          </button>
        </Link>
        <a
          href="https://github.com/kizwolak"
          className={!isLoaded ? "img-bounce-3" : ""}
        >
          <img src="./images/iconmonstr-linkedin-3.svg" alt="LinkedIn" />
        </a>
      </div>
    </nav>
  );
}
