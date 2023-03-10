import React from "react";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-text">
                <button>About me</button>
                <button>Projects</button>
            </div>
            <div className="navbar-img">
                <a href="https://github.com/kizwolak"><img src="./images/github-mark.svg" alt="Github" /></a>
                <a href="https://github.com/kizwolak"><img src="./images/email-black-envelope-back-svgrepo-com.svg" alt="Github" /></a>
                <a href="https://github.com/kizwolak"><img src="./images/iconmonstr-linkedin-3.svg" alt="Github" /></a>
            </div>
        </div>
    )
}
