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
          contests! With a grand prize of Rs.2000 for the winner and Rs.1000 for
          the runner-up in each competition, the stakes are high. Get ready to
          showcase your skills and compete against the best from around the
          globe. Don't miss this opportunity to win big and prove your prowess
          in these exciting challenges!
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
