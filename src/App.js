import React from "react";
import Footer from "./components/Footer";
import HomeProjects from "./components/HomeProjects";
import HomeProjectsFooter from "./components/HomeProjectsFooter";
import HomeSkills from "./components/HomeSkills";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import ContactForm from "./components/ContactForm";
import "./homeskillsprojects.scss";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Title />
      <div className="page">
        <section className="section">
          <p className="section-label mono">skills</p>
          <HomeSkills />
        </section>
        <section className="section">
          <p className="section-label mono">selected projects</p>
          <HomeProjects />
          <HomeProjectsFooter />
        </section>
        <section className="section">
          <p className="section-label mono">contact</p>
          <ContactForm />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
