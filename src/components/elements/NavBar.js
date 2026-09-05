import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Resume from "../../resume.json";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`site-nav ${isScrolled ? "is-scrolled" : ""}`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="site-nav-inner">
        <a href="/" className="site-nav-brand">
          <span className="brand-mark" aria-hidden="true">
            <i className="fab fa-github"></i>
          </span>
          <span className="brand-text">{Resume.basics.name}</span>
        </a>

        <div className="site-nav-actions">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
