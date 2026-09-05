import React from "react";

const progress = {
  Advanced: 100,
  Intermediate: 66,
  Basic: 33
};

function ProgressBar({ text, level, animate = true }) {
  const value = animate ? progress[level] || 0 : 0;

  return (
    <div>
      <span className="title is-5 is-spaced">{text}</span>
      <span className="subtitle is-6 skill-percentage">{level}</span>
      <progress className="progress is-success" value={value} max="100">
        {progress[level] || 0}%
      </progress>
    </div>
  );
}

export default ProgressBar;
