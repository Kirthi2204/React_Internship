import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import './App.css'
function App() {
  return (
    <>
      <Header
        title="Kirthi P"
        links={["Home", "About", "Skills", "Projects", "Contact"]}
      />

      <Hero
        name="Kirthi P"
        tagline="Full-Stack Developer | React.js"
      />

      <About/>

      <Skills
        skills={[
          "HTML",
          "CSS",
          "JavaScript",
          "React.js",
          "Node.js",
          "MongoDB",
          "Cybersecurity Basics"
        ]}
      />

      <Projects/>

      <Contact />

      <Footer
        linkedin="https://www.linkedin.com/in/kiruthiga-palani-381b37281"
        github="https://github.com/"
      />
    </>
  );
}

export default App;
