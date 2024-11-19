import React from "react";
import { motion, spring } from "framer-motion";

export default function EventCard({ data }) {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      className="events_card"
    >
      <div className="events_card_img">
        <img src={data.image} alt="" />
      </div>
      <div className="events_card_data">
        <h1>{data.title}</h1>
        <p>{data.discription}</p>
      </div>
      <div className="register">
        <a href={data.link}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: spring, stiffness: 600 }}
          >
            register now
          </motion.button>
        </a>
      </div>
    </motion.div>
  );
}
