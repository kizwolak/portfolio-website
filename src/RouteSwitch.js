import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

const RouteSwitch = () => {
  return (
    <HashRouter basename="/portfolio-website">
      <Routes>
        <Route path="/portfolio-website" element={<App />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;
