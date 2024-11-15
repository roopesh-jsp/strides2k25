import React from "react";

export default function AboutHeadCard({ name, title, role, img, className }) {
  return (
    <div className={`about_head_card ${className}`}>
      <div className="about_head_card_img">
        <div className="about_head_card_image ">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="about_1_1">
        <div className="about_overlay">
          <h1>{title}</h1>
          <p>{name}</p>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
}
