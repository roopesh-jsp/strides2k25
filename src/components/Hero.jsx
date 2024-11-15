import React from "react";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-bg">
        <div id="hero-1">
          <h1 className="hero-1">strides</h1>
          <h1 className="hero-1">strides</h1>
        </div>

        <h1 className="hero-2">E-Artifact</h1>
      </div>
      <div className="countdown">
        <Countdown />
      </div>
      <h3 className="hero-date">
        date to remember : <span>09-01-2025</span>
      </h3>
    </div>
  );
}
