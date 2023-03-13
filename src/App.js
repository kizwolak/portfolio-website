import React from "react";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
