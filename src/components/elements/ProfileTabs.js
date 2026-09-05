import React, { useEffect, useState } from "react";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" }
];

function ProfileTabs() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const sections = TABS.map((tab) => document.getElementById(tab.id)).filter(
      Boolean
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="profile-tabs" aria-label="Profile sections">
      {TABS.map((tab) => (
        <a
          key={tab.id}
          href={`#${tab.id}`}
          className={`profile-tab ${active === tab.id ? "is-active" : ""}`}
        >
          {tab.label}
        </a>
      ))}
    </div>
  );
}

export default ProfileTabs;
