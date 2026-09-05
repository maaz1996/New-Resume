import React from "react";
import ProgressBar from "./ProgressBar";

function SkillsList({ skills, animate = true }) {
  return (
    <ul className="skill-list">
      {Object.entries(skills).map(([name, level]) => (
        <li key={name}>
          <ProgressBar text={name} level={level} animate={animate} />
        </li>
      ))}
    </ul>
  );
}

export default SkillsList;
