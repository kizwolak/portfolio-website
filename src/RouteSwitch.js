import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

const RouteSwitch = () => {
  return (
    <HashRouter hashType="hashbang">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;
