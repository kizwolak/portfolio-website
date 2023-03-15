import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AboutMe from "./components/AboutMe";

const RouteSwitch = () => {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setLoaded(true), 14000);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App loaded={loaded} />} />
        <Route path="/about" element={<AboutMe loaded={loaded} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
