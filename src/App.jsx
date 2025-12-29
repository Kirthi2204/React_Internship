import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import './App.css';
function App() {
  const skills = [
    "React.js",
    "JavaScript",
    "HTML & CSS",
    "Node.js",
    "MongoDB",
    "Cybersecurity Basics"
  ];

  return (
    <>
      <Header />
      <Hero name="Kiruthiga Palani" tagline="Full-Stack Developer | React.js" />
      <About />
      <Skills skills={skills} />
      <Projects />
      <Contact />
      <Footer
        linkedin="https://www.linkedin.com/in/kiruthiga-palani-381b37281"
        github="https://github.com/"
      />
    </>
  );
}

export default App;
