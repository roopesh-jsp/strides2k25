import React from "react";
import ImageSlider3 from "../components/ImageSlider3";
import { images_1, images_2 } from "../data/data";

export default function Gallery() {
  return (
    <div id="gallery">
      <div className="gallary_hero">
        <div className="hero_highlight hero_highlight_top"></div>
        <h1>gallery</h1>
      </div>
      <div className="gallerys">
        <div className="gallery">
          <h2>events</h2>
          <ImageSlider3 imgArray={images_1} />
        </div>
        <div className="gallery">
          <h2>talent expo 2024</h2>
          <ImageSlider3 imgArray={images_2} />
        </div>
      </div>
    </div>
  );
}
