import React from "react";
import useInView from "../../hooks/useInView";
import Resume from "../../resume.json";

function ProfileOverview() {
  const [ref, isInView] = useInView();
  const years = new Date().getFullYear() - 2019;
  const skillsCount = Resume.skills.length;
  const rolesCount = Resume.work.filter(
    (item) => !item.position.toLowerCase().includes("computer engineering")
  ).length;
  const about =
    Resume.basics.x_about ||
    Resume.basics.summary;

  return (
    <section
      id="overview"
      ref={ref}
      className={`profile-section reveal ${isInView ? "is-visible" : ""}`}
    >
      <div className="readme-card">
        <div className="readme-header">
          <i className="fas fa-book-open" aria-hidden="true"></i>
          <span>{Resume.basics.name.replace(" ", "")} / README.md</span>
        </div>
        <div className="readme-body">
          <h2>{Resume.basics.x_title}</h2>
          <p className="readme-lead">{about}</p>
          <h3 className="readme-subheading">Currently</h3>
          <p>
            {Resume.basics.x_headline || Resume.basics.label} in{" "}
            {Resume.basics.location.region}, {Resume.basics.location.country}.
            Building and shipping production systems with a focus on reliability,
            clean design, and continuous learning.
          </p>
          <h3 className="readme-subheading">Focus areas</h3>
          <ul className="readme-list">
            <li>Backend engineering, APIs, and identity systems</li>
            <li>Problem solving across media, ed-tech, HCM, and CRM domains</li>
            <li>Writing maintainable code and growing as a Member of Technical Staff</li>
          </ul>
          <div className="stat-row">
            <div className="stat-pill">
              <strong>{years}+</strong>
              <span>Years</span>
            </div>
            <div className="stat-pill">
              <strong>{rolesCount}</strong>
              <span>Roles</span>
            </div>
            <div className="stat-pill">
              <strong>{skillsCount}</strong>
              <span>Skills</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileOverview;
