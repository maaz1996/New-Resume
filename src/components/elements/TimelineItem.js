import React from "react";

function TimelineItem(props) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-32x32">
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" />
      </div>
      <div className="timeline-content">
        <p className="heading">{props.date}</p>
        <h2 className="title is-4">{props.company}</h2>
        <p className="heading">{props.position}</p>
        <p>{props.summary}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
