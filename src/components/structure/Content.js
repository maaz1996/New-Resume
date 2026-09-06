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
      <div className="profile-banner" role="img" aria-label="Mountain travel header banner">
        <img
          src="images/header-banner.jpg"
          alt=""
          className="profile-banner-image"
        />
        <div className="profile-banner-overlay"></div>
      </div>
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
