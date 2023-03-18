import React from "react";

export default function Footer() {
  const isLoaded = localStorage.getItem("loaded");
  return (
    <footer>
      <p className={!isLoaded ? "footer-fade-in" : ""}>
        Krzysztof Zwolak, 2023
      </p>
    </footer>
  );
}
