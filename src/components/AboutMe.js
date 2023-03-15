import React from "react";
import Navbar from "./Navbar";

export default function AboutMe(props) {
  const loaded = props.loaded;
  return (
    <div className="about-me">
      <Navbar loaded={loaded} />
      <p className="about-header">It's great to meet you!</p>
    </div>
  );
}
