import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p>
          Built by{" "}
          <a
            href="https://github.com/maaz1996"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maaz Abdullah
          </a>
        </p>
        <p className="footer-note">
          <i className="fas fa-heart" aria-hidden="true"></i> {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
