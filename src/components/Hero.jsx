import React from "react";
import Countdown from "./Countdown";
import { motion, spring } from "framer-motion";

export default function Hero() {
  return (
    <div className="hero">
      <motion.div
        className="hero-bg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, type: spring, stiffness: 500 }}
      >
        <div id="hero-1">
          <h1 className="hero-1">strides</h1>
          <h1 className="hero-1">strides</h1>
        </div>

        <h1 className="hero-2">
          <span className="hero_2_1">E-</span>
          <span className="divider"></span>
          <span className="hero_2_2"> Artifact</span>
        </h1>
      </motion.div>
      <div className="countdown">
        <Countdown />
      </div>
      <h3 className="hero-date">
        date to remember : <span>09-01-2025</span>
      </h3>
    </div>
  );
}
