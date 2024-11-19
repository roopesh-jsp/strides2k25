import React, { useState, useEffect } from "react";

function Countdown() {
  const endTime = new Date("jan 9, 2025 00:00:00").getTime();
  const [done, setDone] = useState(false);
  const [currTime, setCurrTime] = useState(new Date().getTime());
  const gap = endTime - currTime;
  const sec = 1000;
  const min = sec * 60;
  const hours = min * 60;
  const day = hours * 24;
  let timer;

  const remainingDays = String(Math.floor(gap / day)).padStart(2, 0);
  const remainingHours = String(Math.floor((gap % day) / hours)).padStart(2, 0);
  const remainingMinutes = String(Math.floor((gap % hours) / min)).padStart(
    2,
    0
  );
  const remainingSeconds = String(Math.floor((gap % min) / sec)).padStart(2, 0);

  useEffect(() => {
    if (currTime < endTime - 1) {
      timer = setTimeout(() => setCurrTime(new Date().getTime()), 500);
    } else {
      setDone(true);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [currTime]); // 11:30:55
  return (
    <>
      <div className="timer">
        <div className="timer_part">
          <div className="timer_label">days</div>
          <div>{remainingDays > 0 ? remainingDays : "00"}</div>
        </div>
        <span>:</span>
        <div className="timer_part">
          <div className="timer_label">hours</div>
          <div>{remainingHours > 0 ? remainingHours : "00"}</div>
        </div>
        <span>:</span>
        <div className="timer_part">
          <div className="timer_label">mins</div>
          <div>{remainingMinutes > 0 ? remainingMinutes : "00"}</div>
        </div>
        <span>:</span>
        <div className="timer_part">
          <div className="timer_label">secs</div>
          <div>{remainingSeconds > 0 ? remainingSeconds : "00"}</div>
        </div>
      </div>
      {done && (
        <div className="done">
          <h1>Event is live ... 🚀👇</h1>
        </div>
      )}
    </>
  );
}

export default Countdown;
