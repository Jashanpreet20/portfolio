import React, { useContext } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Sociallinks from "./Sociallinks";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Contact from "./Contact";
import { ThemeContext } from "./Context/ThemeProvider";
export default function Section() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`w-full h-lvh ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } `}
    >
      <Navbar />
      <Home />
      <Portfolio />
      <Experience />
      <Contact />
      <Sociallinks />
    </div>
  );
}
