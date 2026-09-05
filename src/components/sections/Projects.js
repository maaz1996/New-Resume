import React, { useEffect, useState } from "react";
import useInView from "../../hooks/useInView";
import Resume from "../../resume.json";

const LANGUAGE_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572a5",
  Java: "#b07219",
  "C++": "#f34b7d",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Go: "#00add8",
  Shell: "#89e051"
};

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ref, isInView] = useInView();
  const username =
    Resume.basics.profiles.find((p) => p.network === "GitHub")?.username ||
    "maaz1996";

  useEffect(() => {
    const controller = new AbortController();
    const pinned = Resume.basics.pinnedRepos || [];

    fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
      signal: controller.signal,
      headers: { Accept: "application/vnd.github+json" }
    })
      .then((response) => response.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          setRepos([]);
          setLoading(false);
          return;
        }

        const byName = Object.fromEntries(data.map((repo) => [repo.name, repo]));
        const selected = pinned
          .map((name) => byName[name])
          .filter(Boolean);

        const fallback = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);

        setRepos(selected.length ? selected : fallback);
        setLoading(false);
      })
      .catch(() => {
        setRepos([]);
        setLoading(false);
      });

    return () => controller.abort();
  }, [username]);

  return (
    <section
      id="projects"
      ref={ref}
      className={`profile-section reveal ${isInView ? "is-visible" : ""}`}
    >
      <div className="section-heading">
        <h2>Pinned Repositories</h2>
        <p>Selected work from GitHub</p>
      </div>

      {loading ? (
        <p className="articles-empty">Loading repositories…</p>
      ) : repos.length === 0 ? (
        <p className="articles-empty">
          Couldn’t load repositories right now.{" "}
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </p>
      ) : (
        <div className="articles-grid">
          {repos.map((repo) => {
            const color =
              LANGUAGE_COLORS[repo.language] || "var(--text-muted)";
            return (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-card"
              >
                <div className="repo-card-body">
                  <div className="repo-card-title">
                    <i className="fas fa-book" aria-hidden="true"></i>
                    <span>{repo.name}</span>
                  </div>
                  <p>
                    {repo.description || "No description provided."}
                  </p>
                  <div className="repo-card-meta">
                    {repo.language ? (
                      <>
                        <span
                          className="lang-dot"
                          style={{ background: color }}
                          aria-hidden="true"
                        ></span>
                        <span>{repo.language}</span>
                      </>
                    ) : null}
                    <span className="repo-stat">
                      <i className="fas fa-star" aria-hidden="true"></i>
                      {repo.stargazers_count}
                    </span>
                    <span className="repo-stat">
                      <i className="fas fa-code-branch" aria-hidden="true"></i>
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Projects;
