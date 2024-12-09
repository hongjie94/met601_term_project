import portfolioData from "../data/portfolioData.json";
import { Code2, Eye } from 'lucide-react';
import "../styles/About.css";
const About = () => {
  return (
    <>
      <div className="about-skills-grid">
        <section id="about" className="about">
          <h2>{portfolioData.about.title}</h2>
          <div className="about-content">
            <img src={portfolioData.about.image} alt="Profile" className="profile-image" />
            <p>
            {portfolioData.about.description}
            </p>
          </div>
        </section>

        <section id="skills" className="skills">
          <h2>{portfolioData.skills.title}</h2>
          <div className="skills-grid">
            {portfolioData.skills.items.map((skill, index) => (
              <div key={index} className="skill-card">
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="assignments-section">
      <h2>{portfolioData.assignments.title}</h2>
      
      <div className="assignments-grid">
        {portfolioData.assignments.items.map((assignment, index) => (
          <div key={index} className="assignment-card">
            <h3>{assignment.title}</h3>
            <p>{assignment.desc}</p>
            
            <div className="card-actions">
              <a href="#" className="action-link">
                <Code2 size={20} />
                <span>Code</span>
              </a>
              
              <a href="#" className="action-link">
                <Eye size={20} />
                <span>View</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default About