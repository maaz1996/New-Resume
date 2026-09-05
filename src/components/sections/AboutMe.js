import React from "react";
import Badge from "../elements/Badge";
import useInView from "../../hooks/useInView";
import Resume from "../../resume.json";

function AboutMe() {
  const [ref, isInView] = useInView();

  return (
    <section className="section section-accent" id="aboutMe">
      <div
        ref={ref}
        className={`container has-text-centered reveal ${
          isInView ? "is-visible" : ""
        }`}
      >
        <figure className="image container is-180x180">
          <img
            width="180"
            height="180"
            src={Resume.basics.picture}
            alt={Resume.basics.name}
            className="is-rounded profile-photo"
          />
        </figure>
        <p className="subtitle is-4 has-text-weight-bold">
          {Resume.basics.x_title}
        </p>
        <p className="subtitle is-5 has-text-weight-light summary-text">
          {Resume.basics.summary}
        </p>
        <div className="container interests">
          <div className="field is-grouped is-grouped-multiline has-text-centered is-grouped-centered">
            {Resume.interests.map((interest) => (
              <Badge
                key={interest.name}
                text={interest.name}
                faIcon={interest.x_icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
