import React from "react";
import Resume from "../../resume.json";

function ProfileSidebar() {
  return (
    <aside className="profile-sidebar">
      <div className="profile-avatar-wrap">
        <img
          src={Resume.basics.picture}
          alt={Resume.basics.name}
          className="profile-avatar"
          width="296"
          height="296"
        />
      </div>

      <div className="profile-identity">
        <h1 className="profile-name">{Resume.basics.name}</h1>
        <p className="profile-role">
          {Resume.basics.x_headline || Resume.basics.label}
        </p>
      </div>

      <p className="profile-bio">{Resume.basics.summary}</p>

      <ul className="profile-details">
        <li>
          <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
          <span>
            {Resume.basics.location.region}, {Resume.basics.location.country}
          </span>
        </li>
        {Resume.basics.profiles.map((profile) => (
          <li key={profile.network}>
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-detail-link"
            >
              <i
                className={profile.x_icon.replace("fa-2x ", "")}
                aria-hidden="true"
              ></i>
              <span>{profile.network}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="profile-interests">
        <h2 className="sidebar-heading">Interests</h2>
        <div className="chip-row">
          {Resume.interests.map((interest) => (
            <span key={interest.name} className="chip">
              <i className={`fas ${interest.x_icon}`} aria-hidden="true"></i>
              {interest.name}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default ProfileSidebar;
