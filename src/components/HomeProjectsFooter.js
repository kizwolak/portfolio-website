import React from "react";
import { Link } from "react-router-dom";

export default function HomeProjectsFooter() {
  return (
    <p className="projects-invitation">
      That's a small sample - see the full list on the{" "}
      <Link to="/projects">projects page</Link>, or check my{" "}
      <a href="https://github.com/kizwolak">GitHub</a>.
    </p>
  );
}
