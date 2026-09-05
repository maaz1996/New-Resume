import React from "react";
import useInView from "../../hooks/useInView";
import Resume from "../../resume.json";

function formatRange(startDate, endDate) {
  const start = new Date(startDate).toLocaleString("en-US", {
    month: "short",
    year: "numeric"
  });
  if (!endDate) {
    return `${start} — Present`;
  }
  const end = new Date(endDate).toLocaleString("en-US", {
    month: "short",
    year: "numeric"
  });
  return `${start} — ${end}`;
}

function Experience() {
  const [ref, isInView] = useInView();

  return (
    <section
      id="experience"
      ref={ref}
      className={`profile-section reveal ${isInView ? "is-visible" : ""}`}
    >
      <div className="section-heading">
        <h2>Experience</h2>
        <p>Roles, growth, and learning over the years</p>
      </div>

      <div className="experience-list">
        {Resume.work.map((item, index) => (
          <article key={`${item.company}-${index}`} className="experience-card">
            <div className="experience-card-top">
              <div>
                <h3>{item.company}</h3>
                <p className="experience-role">{item.position}</p>
              </div>
              <span className="experience-date">
                {formatRange(item.startDate, item.endDate)}
              </span>
            </div>
            <p className="experience-summary">{item.summary}</p>
            {item.website ? (
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="experience-link"
              >
                <i className="fas fa-link" aria-hidden="true"></i>
                Website
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
