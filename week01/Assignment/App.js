import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const skills = [
    { name: "React" },
    { name: "JavaScript" },
    { name: "Node.js" },
    { name: "HTML & CSS" }
  ];

  return (
    <div>
      <Header />
      <Hero name="Kiruthiga Palani" tagline="Full-Stack Developer | React Enthusiast" />
      <About />
      <Skills skills={skills} />
      <Projects />
      <Contact />
      <Footer
        linkedin="https://www.linkedin.com/in/kirthi-p-123456789/"
        github="https://github.com/kirthip"
      />
    </div>
  );
}

export default App;
