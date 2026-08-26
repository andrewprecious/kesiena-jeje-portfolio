import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Experience from "./pages/experience/Experience";
import AboutMe from "./pages/about-me/AboutMe";
import Skill from "./pages/skills/Skills";
import Gallery from "./pages/gallery/Gallery";
import ContactMe from "./pages/contact-me/ContactMe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
