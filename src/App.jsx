import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/events";
import RootLayout from "./pages/RootLayout";
import Gallery from "./pages/Gallery";
import About from "./pages/About";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/events", element: <Events /> },
        {
          path: "/gallery",
          element: <Gallery />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return (
    <div>
      {/* <Navbar />
      <Hero /> */}
      <RouterProvider router={router} />
    </div>
  );
}
