import React from "react";
import HomeProjects from "./components/HomeProjects";
import HomeSkills from "./components/HomeSkills";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Title />
      <HomeSkills />
      <HomeProjects />
    </div>
  );
}

export default App;
