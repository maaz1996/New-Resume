import React from "react";
import TimelineItem from "./TimelineItem";
import Resume from "../../resume.json";

function Timeline() {
  const groupedWork = Resume.work.reduce((acc, item) => {
    const year = new Date(item.startDate).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedWork).sort((a, b) => b - a);

  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-dark">{new Date().getFullYear()}</span>
      </header>

      {sortedYears.map((year) => (
        <React.Fragment key={year}>
          <header className="timeline-header">
            <span className="tag is-success">{year}</span>
          </header>
          {groupedWork[year].map((item, index) => (
            <TimelineItem
              key={`${year}-${index}`}
              date={new Date(item.startDate).toLocaleString("en-UK", {
                month: "long",
                year: "numeric"
              })}
              company={item.company}
              position={item.position}
              summary={item.summary}
            />
          ))}
        </React.Fragment>
      ))}

      <header className="timeline-header">
        <span className="tag is-medium is-dark">Start</span>
      </header>
    </div>
  );
}

export default Timeline;
