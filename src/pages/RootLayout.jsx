import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
// import heroImg from "../assets/hero2.mp4";
import bgvid from "../assets/bgvid.mp4";
export default function RootLayout() {
  return (
    <div id="RootLayout">
      <video loop autoPlay muted className="background-video">
        <source src={bgvid} type="video/mp4" />
      </video>
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
