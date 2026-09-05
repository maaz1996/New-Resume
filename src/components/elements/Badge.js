import React from "react";

function Badge({ text, faIcon }) {
  return (
    <div className="control interest-badge">
      <div className="tags has-addons">
        <span className="tag is-dark">{text}</span>
        <span className="tag is-success">
          <i className={`fas fa-1x ${faIcon}`} aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
}

export default Badge;
