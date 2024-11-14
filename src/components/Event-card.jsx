import React from "react";

export default function EventCard({ data }) {
  return (
    <div className="events_card">
      <div className="events_card_img">
        <img src={data.image} alt="" />
      </div>
      <div className="events_card_data">
        <h1>{data.title}</h1>
        <p>{data.discription}</p>
      </div>
      <div className="register">
        <button>register now</button>
      </div>
    </div>
  );
}
