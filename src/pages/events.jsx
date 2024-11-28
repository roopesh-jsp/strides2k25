import React from "react";
import EventCard from "../components/Event-card";
import { events } from "../data/data";
export default function Events() {
  return (
    <div id="events">
      <div className="events_headInfo">
        <h1>E - artifact</h1>
        <p>
          Join us for an electrifying event featuring five thrilling online
          contests! Prizes will be rewarded to the winner and runner-up in each
          competition. Get ready to showcase your skills and compete against the
          best from around the globe. Don't miss this opportunity to win big and
          prove your prowess in these exciting challenges!
        </p>
      </div>
      <div className="events">
        {events.map((event, idx) => (
          <EventCard key={idx} data={event} />
        ))}
      </div>
    </div>
  );
}
