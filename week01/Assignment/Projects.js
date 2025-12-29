import alumniImg from "../assets/alumni.png";
import chatbotImg from "../assets/chatbot.png";
import fitnessImg from "../assets/fitness.png";

function Projects() {
  const projects = [
    {
      title: "Streamlined Alumni Student Interaction Platform",
      description: "A platform to connect alumni and students efficiently.",
      image: alumniImg
    },
    {
      title: "Customer Support Chatbot using NLP",
      description: "An intelligent chatbot for customer support using Natural Language Processing.",
      image: chatbotImg
    },
    {
      title: "Fitness App",
      description: "Workout and health tracking application.",
      image: fitnessImg
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
