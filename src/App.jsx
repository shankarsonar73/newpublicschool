import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Landingpage from "./Pages/Landingpage";
import NavBar1 from "./components/navbar/NavBar1";
import Navbar2 from "./components/navbar/NavBar2";
import Navigation from "./components/navbar/Navigation";
import ImageSliderWithMarquee from "./components/ImageSliderWithMarquee"
import { ImBookmark } from "react-icons/im";
import ServiceGrid from "./components/ServiceGrid"
import WelcomeSection from "./components/WelcomeSection"
import CardSection from "./components/CardSection"
import VideoFeature from "./components/VideoFeature";
import MeetUp from "./components/MeetUp";
import ExploreFuture from "./components/ExploreFuture";
import TestimonialSection from "./components/TestimonialSection";
import About from "./components/About";
import Activity from "./Pages/Activity";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
