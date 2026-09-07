import React from "react";
import { Link } from "react-router-dom";
import "../navbar.scss";
import { useTheme } from "../ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const handleEmailClick = () => {
    setTimeout(() => {
      const contactForm = document.querySelector(".contact-form");
      if (contactForm) contactForm.scrollIntoView();
    }, 100);
  };

  return (
    <nav className="navbar">
      <div className="page navbar-inner">
        <Link to="/" className="navbar-mark mono">
          kzwolak
        </Link>
        <div className="navbar-links mono">
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/projects">projects</Link>
        </div>
        <div className="navbar-actions">
          <button
            type="button"
            className="icon-button"
            aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="4.5" />
                <path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
              </svg>
            )}
          </button>
          <a href="https://github.com/kizwolak" aria-label="GitHub" className="icon-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.68-1.29-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.82 1.19 3.08 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>
          <Link to="/#" aria-label="Email" className="icon-button" onClick={handleEmailClick}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="2" y="4" width="20" height="16" rx="1.5" />
              <path d="m3 6 9 7 9-7" />
            </svg>
          </Link>
          <a
            href="https://www.linkedin.com/in/krzysztof-zwolak-a6875a18a/"
            aria-label="LinkedIn"
            className="icon-button"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5ZM8 19H5V8h3v11ZM6.5 6.73A1.76 1.76 0 1 1 6.5 3.2a1.76 1.76 0 0 1 0 3.53ZM19 19h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V19h-3V8h2.88v1.5h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2 3.61 4.6V19Z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
