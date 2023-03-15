import React from "react";

export default function Navbar({ loaded }) {
  console.log(loaded);
  return (
    <nav>
      <div className={loaded ? "navbar-text navbar-text-fade" : "navbar-text"}>
        <a href="./">Home</a>
        <a href="./about">About me</a>
        <a href="./projects">Projects</a>
      </div>
      <div className="navbar-img">
        <a href="https://github.com/kizwolak" id="first-nav-img">
          <img src="./images/github-mark.svg" alt="Github" />
        </a>
        <a href="https://github.com/kizwolak" id="sec-nav-img">
          <img
            src="./images/email-black-envelope-back-svgrepo-com.svg"
            alt="Github"
          />
        </a>
        <a href="https://github.com/kizwolak" id="thrd-nav-img">
          <img src="./images/iconmonstr-linkedin-3.svg" alt="Github" />
        </a>
      </div>
    </nav>
  );
}
