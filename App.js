import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Team from "./Components/Team";
import EggAmlate from "./DropdownComponents/EggAmlateCards";
import { Footer } from "./Components/Footer";

import { Routes, Route } from "react-router-dom";
import Particles from "./Components/Particles";
import Trending from "./Components/Trending";



const App = () => {
  
  return (
    <>
      <Particles/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team/>}/>
        <Route path="/eggamlate" element={<EggAmlate/>}/>
      </Routes>
      <Footer/>
    </>

  )
}
export default App;