import alumni from "../assets/alumni.png";
import chatbot from "../assets/chatbot.png";
import fitness from "../assets/fitness.png";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        <div className="project-card">
          <img src={alumni} alt="Alumni Platform" />
          <h3>Streamlined Alumni Student Interaction Platform</h3>
        </div>

        <div className="project-card">
          <img src={chatbot} alt="Chatbot" />
          <h3>Customer Support Chatbot using NLP</h3>
        </div>

        <div className="project-card">
          <img src={fitness} alt="Fitness App" />
          <h3>Fitness App – Workout & Health Tracking</h3>
        </div>
      </div>
    </section>
  );
}

export default Projects;
