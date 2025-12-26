function Skills({ skills }) {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span>{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
