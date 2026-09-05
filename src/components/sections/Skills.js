import React from "react";
import useInView from "../../hooks/useInView";
import Resume from "../../resume.json";

const levelClass = {
  Advanced: "is-advanced",
  Intermediate: "is-intermediate",
  Basic: "is-basic"
};

function Skills() {
  const [ref, isInView] = useInView();

  const groups = [
    {
      title: "Languages & Stack",
      keyword: "Programming Languages"
    },
    {
      title: "Frameworks & Practices",
      keyword: "Frameworks/Problem Solving"
    }
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className={`profile-section reveal ${isInView ? "is-visible" : ""}`}
    >
      <div className="section-heading">
        <h2>Skills</h2>
        <p>Technologies and strengths I work with</p>
      </div>

      <div className="skills-groups">
        {groups.map((group) => {
          const skills = Resume.skills.filter((skill) =>
            skill.keywords.includes(group.keyword)
          );
          return (
            <div key={group.title} className="skills-card">
              <h3>{group.title}</h3>
              <div className="chip-row">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`skill-chip ${levelClass[skill.level] || ""}`}
                    title={skill.level}
                  >
                    <span className="skill-dot" aria-hidden="true"></span>
                    {skill.name}
                    <em>{skill.level}</em>
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
