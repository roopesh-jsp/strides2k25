import React from "react";

export default function AboutCard({ title, faculty, stu_1, stu_2, img }) {
  return (
    <div className="AboutCard about_head_card">
      <div className="about_head_card_img AboutCard_head">
        <span>faculty-coordinator</span>
        <p className="about_head_card_image">
          <img src={img} alt="" />
        </p>
        <p>{faculty}</p>
      </div>
      <div className="about_body ">
        <h1>{title}</h1>

        <h3>
          <span>student coordinators</span> <p>{stu_1}</p> <p>{stu_2}</p>
        </h3>
      </div>
    </div>
  );
}
