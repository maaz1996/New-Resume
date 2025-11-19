import React from "react";
import TimelineItem from "./TimelineItem";
import Resume from "../../resume.json";

function Timeline() {
  // 1. Group the work items by their start year
  const groupedWork = Resume.work.reduce((acc, item) => {
    const year = new Date(item.startDate).getFullYear();
    // Initialize the array for the year if it doesn't exist
    if (!acc[year]) {
      acc[year] = [];
    }
    // Add the current work item to that year's array
    acc[year].push(item);
    return acc;
  }, {});

  // 2. Sort the years in descending order (most recent first)
  const sortedYears = Object.keys(groupedWork).sort((a, b) => b - a);

  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-dark">
          {new Date().getFullYear()}
        </span>
      </header>

      {/* Render a placeholder marker for visual effect */}
      <div className="timeline-item">
        <div className="timeline-marker is-success"></div>
        <div className="timeline-content"></div>
      </div>

      {/* 3. Map over the sorted years to render the timeline */}
      {sortedYears.map((year) => (
        <React.Fragment key={year}>
          {/* Timeline Header (Year Tag) */}
          <header className="timeline-header">
            <span className="tag is-success">{year}</span>
          </header>

          {/* Timeline Items for that Year */}
          {groupedWork[year].map((item, index) => (
            <TimelineItem
              key={`${year}-${index}`} // Unique key
              date={new Date(item.startDate).toLocaleString("en-UK", {
                month: "long",
                year: "numeric",
              })}
              company={item.company}
              position={item.position}
              summary={item.summary}
            />
          ))}
        </React.Fragment>
      ))}

      {/* Optional: Add an end marker if desired */}
      <header className="timeline-header">
        <span className="tag is-medium is-dark">Start</span>
      </header>
    </div>
  );
}

export default Timeline;