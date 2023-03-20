import React from "react";
import Navbar from "./Navbar";
import "../aboutme.scss";
import Footer from "./Footer";

export default function AboutMe(props) {
  const loaded = props.loaded;
  return (
    <div className="about-me">
      <Navbar loaded={loaded} />
      <p className="about-header">Nice to meet you!</p>
      <p className="about-desc">
        I am a fresh web developer who (for now) specialises in the front-end. I
        used to be a medical and legal translator, but I decided to switch
        careers. After trying many different programming languages, something
        finally clicked when I tried web dev. Painting on the HTML canvas feels
        like art. I love learning about it and solving problems is an
        incredible, addictive feeling - especially after spending multiple days
        on them! To expand my skillset, I plan to start learning Node and
        Express soon (though I may actually go into Ruby instead!). I speak
        Polish, English, French and some Rioplatense Spanish, so feel free to
        contact me in any of these languages!
      </p>
      <div className="contact">
        <p>You can contact me at:</p>
        <p>ki.zwolak@gmail.com</p>
        <p>LinkedIn</p>
      </div>
      <Footer />
    </div>
  );
}
