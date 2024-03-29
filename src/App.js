import React from "react";
import Footer from "./components/Footer";
import HomeProjects from "./components/HomeProjects";
import HomeProjectsFooter from "./components/HomeProjectsFooter";
import HomeSkills from "./components/HomeSkills";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import ContactForm from "./components/ContactForm";

function App(props) {
  setTimeout(() => localStorage.setItem("loaded", 1), 1000);
  return (
    <div className="main">
      <Navbar />
      <Title />
      <div className="home-skills-projects">
        <HomeSkills />
        <HomeProjects />
      </div>
      <HomeProjectsFooter />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
