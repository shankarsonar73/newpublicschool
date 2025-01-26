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
import Academic1 from "./Pages/Academic/Academic1";
import Academic2 from "./Pages/Academic/Academic2";
import Academic3 from "./Pages/Academic/Academic3";
import Academic4 from "./Pages/Academic/Academic4";
import ConKar from "./components/ConKar";

import Gallery from "./Pages/Gallery/Gallery";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ConKar/>} />



        {/* Academic */}
      
        <Route path="/academic1" element={<Academic1 />} />
        <Route path="/academic2" element={<Academic2 />} />
        <Route path="/academic3" element={<Academic3 />} />
        <Route path="/academic4" element={<Academic4 />} />




      </Routes>
    </BrowserRouter>
  );
};

export default App;
