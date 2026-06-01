import "./styles/About.css";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Django", "Flask"],
    },
    {
      category: "Languages",
      items: ["Java", "Python", "JavaScript", "C (Basic)", "C++ (Basic)"],
    },
    {
      category: "Databases",
      items: ["MongoDB", "Firebase", "MySQL"],
    },
    {
      category: "Core",
      items: ["DSA (Java)", "REST API", "OOP", "Problem Solving", "ML Fundamentals", "AI Fundamentals"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ];

  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Motivated and passionate Full Stack Developer currently pursuing BCA
          from Dr. Virendra Swarup Institute of Computer Studies, Kanpur.
        </p>
        <p className="about-para-2">
          Skilled in React.js, Node.js, Django, MongoDB, and Firebase. Strong
          foundation in DSA, AI, ML, Cyber Security, and backend development.
          Dedicated to continuous learning and leveraging technology to solve
          real-world problems.
        </p>

        <div className="about-skills">
          {skills.map((group) => (
            <div className="about-skill-group" key={group.category}>
              <h5 className="about-skill-label">{group.category}</h5>
              <div className="about-skill-tags">
                {group.items.map((skill) => (
                  <span className="about-skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
