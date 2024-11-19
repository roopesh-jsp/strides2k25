import React from "react";
import ImageSlider3 from "../components/ImageSlider3";
import { images_1, images_2 } from "../data/data";
import { motion, spring } from "framer-motion";
export default function Gallery() {
  return (
    <div id="gallery">
      <div className="gallary_hero">
        <div className="hero_highlight hero_highlight_top"></div>
        <motion.h1
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ type: spring, duration: 0.1, stiffness: 200 }}
        >
          gallery
        </motion.h1>
      </div>
      <div className="gallerys">
        <motion.div
          className="gallery"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>events</h2>
          <ImageSlider3 imgArray={images_1} titles={true} />
        </motion.div>
        <motion.div
          className="gallery"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h2>talent expo 2024</h2>
          <ImageSlider3 imgArray={images_2} titles={false} />
        </motion.div>
      </div>
    </div>
  );
}
