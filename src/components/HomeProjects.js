import React from "react";

const featured = [
  {
    title: "E-commerce cart",
    desc: "A React storefront with cart state, quantity management and checkout totals.",
    tag: "React",
    href: "https://kizwolak.github.io/shopping-cart/",
  },
  {
    title: "Member App",
    desc: "A CRUD application for creating, updating and deleting records through a REST API.",
    tag: "Node + Express",
    href: "https://github.com/kizwolak/member-app",
  },
  {
    title: "Weather app",
    desc: "Looks up current weather and local time for a city, with a temperature-unit converter.",
    tag: "Tools",
    href: "https://kizwolak.github.io/weather-app/dist/index.html/",
  },
  {
    title: "Binary search tree",
    desc: "Checks balance, finds min/max height and depth, and locates values.",
    tag: "Data structures",
    href: "https://github.com/kizwolak/binary-search-tree",
  },
];

export default function HomeProjects() {
  return (
    <div className="home-projects">
      <div className="project-grid">
        {featured.map((project) => (
          <a className="project-card" href={project.href} key={project.title}>
            <span className="tag mono">{project.tag}</span>
            <p className="project-card-title">{project.title}</p>
            <p className="project-card-desc">{project.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
