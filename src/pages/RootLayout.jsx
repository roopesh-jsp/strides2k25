import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
// import heroImg from "../assets/hero2.mp4";
import bgvid from "../assets/bgvid.mp4";
import bg1 from "../assets/bg-1.gif";
export default function RootLayout() {
  return (
    <div id="RootLayout">
      <video loop autoPlay muted className="background-video">
        <source src={bgvid} type="video/mp4" />
      </video>
      {/* <img src={bg1} className="background-video" alt="" /> */}
      {/* <video
        autoPlay
        loop
        muted
        src={bgvid}
        className="background-video"
      ></video> */}
      <Navbar />
      <Outlet />
    </div>
  );
}
