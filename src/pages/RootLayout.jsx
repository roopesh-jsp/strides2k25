import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div id="RootLayout">
      <Navbar />
      <Outlet />
    </div>
  );
}
