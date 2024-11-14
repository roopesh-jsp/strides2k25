import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Events from "./events";
import Gallery from "./Gallery";
import About from "./About";

export default function Home() {
  return (
    <div id="home">
      <Hero />
      <Events />
      <Gallery />
      <About />
    </div>
  );
}
