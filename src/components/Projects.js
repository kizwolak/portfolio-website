import React from "react";
import "../projects.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

const projects = [
  {
    title: "E-commerce cart",
    category: "React",
    desc: "A React storefront with cart state, quantity management and checkout totals.",
    href: "https://kizwolak.github.io/shopping-cart/",
  },
  {
    title: "This website",
    category: "React",
    desc: "Built with React and SCSS, developed mobile-first, with a light/dark theme persisted to localStorage.",
    href: "https://github.com/kizwolak/portfolio-website",
  },
  {
    title: "Weather app",
    category: "Tools",
    desc: "Looks up current weather and local time for a city, with a temperature-unit converter.",
    href: "https://kizwolak.github.io/weather-app/dist/index.html/",
  },
  {
    title: "To-do list",
    category: "Tools",
    desc: "A task manager backed by localStorage, with priority levels and expiry alerts.",
    href: "https://kizwolak.github.io/To-do-list/dist/index.html",
  },
  {
    title: "Calculator",
    category: "Tools",
    desc: "A calculator with full keyboard input support.",
    href: "https://kizwolak.github.io/Calculator/",
  },
  {
    title: "Binary search tree",
    category: "Data structures",
    desc: "Checks if a tree is balanced, finds min/max height and depth, and locates values.",
    href: "https://github.com/kizwolak/binary-search-tree",
  },
  {
    title: "Linked lists",
    category: "Data structures",
    desc: "Finds the index of a value, inserts nodes, and checks list membership.",
    href: "https://github.com/kizwolak/linked-lists/blob/main/linkedLists.js",
  },
  {
    title: "Node and Express basic site",
    category: "Node + Express",
    desc: "Parallel Node and Express implementations of the same site, built to compare the two.",
    href: "https://github.com/kizwolak/basic-informational-site",
  },
  {
    title: "Member App",
    category: "Node + Express",
    desc: "A CRUD application - a GUI for creating, updating and deleting records through a REST API.",
    href: "https://github.com/kizwolak/member-app",
  },
  {
    title: "JS testing practice",
    category: "Testing",
    desc: "Jest tests covering a calculator and array-handling functions.",
    href: "https://github.com/kizwolak/testing-practice",
  },
  {
    title: "React testing practice",
    category: "Testing",
    desc: "Testing React components - input handling, async/promises, callbacks and multi-element assertions.",
    href: "https://github.com/kizwolak/testing-practice",
  },
  {
    title: "A doctor's website",
    category: "Miscellaneous",
    desc: "A fully responsive site for mobile, tablet and desktop, with a custom slider component.",
    href: "https://kizwolak.github.io/Doctor-s-Website/",
  },
  {
    title: "An image slider",
    category: "Miscellaneous",
    desc: "A hand-built JS image slider with no external dependencies.",
    href: "https://github.com/kizwolak/image-slider",
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const visible =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="projects">
      <Navbar />
      <div className="page">
        <section className="section projects-intro">
          <h1>Projects</h1>
          <p className="projects-disclaimer">
            I'm always working on something new, so this list isn't final.
            Check my{" "}
            <a href="https://github.com/kizwolak">GitHub</a> for the rest.
          </p>
          <div className="category-filter mono">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={category === activeCategory ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>
        <section className="section project-list-section">
          <div className="project-list">
            {visible.map((project) => (
              <a className="project-row" href={project.href} key={project.title}>
                <div className="project-row-heading">
                  <p className="project-row-title">{project.title}</p>
                  <span className="tag mono">{project.category}</span>
                </div>
                <p className="project-row-desc">{project.desc}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
