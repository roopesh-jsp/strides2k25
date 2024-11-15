import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Events from "./events";
import Gallery from "./Gallery";
import About from "./About";
import heroimg from "../assets/hero-1.gif";
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
