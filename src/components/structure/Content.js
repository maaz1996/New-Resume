import React from "react";
import ProfileSidebar from "../elements/ProfileSidebar";
import ProfileTabs from "../elements/ProfileTabs";
import ProfileOverview from "../sections/ProfileOverview";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";

function Content() {
  return (
    <main className="profile-page">
      <div className="profile-banner" aria-hidden="true"></div>
      <div className="profile-shell">
        <ProfileSidebar />
        <div className="profile-main">
          <ProfileTabs />
          <ProfileOverview />
          <Skills />
          <Experience />
          <Projects />
        </div>
      </div>
    </main>
  );
}

export default Content;
