import React from "react";
import NavBar from "./NavBar";
import Resume from "../../resume.json";

function Hero() {
  return (
    <section className="hero is-fullheight has-bg-image">
      <div className="hero-head">
        <NavBar />
      </div>
      <div className="hero-body">
        <div className="container hero-content">
          <p className="hero-kicker">I'm a</p>
          <h1 className="hero-title">{Resume.basics.label}</h1>
          <h2 className="hero-subtitle">
            {Resume.basics.location.region}, {Resume.basics.location.country}
          </h2>
        </div>
      </div>
      <div className="hero-foot">
        <div className="social-row">
          {Resume.basics.profiles.map((profile) => (
            <a
              key={profile.network}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title={profile.network}
              aria-label={profile.network}
            >
              <span className="icon is-medium">
                <i className={profile.x_icon}></i>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
