import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  const classList = ['sidebar'];
  if (expanded) classList.push('expanded');

  const toggleDirectLinksVisibility = (e) => {
    e.preventDefault();

    const directLinks = document.querySelector('.direct-links-card');
    if (!directLinks) return;

    if (directLinks?.classList.contains('hidden')) {
      directLinks.classList.remove('hidden');
    } else {
      directLinks.classList.add('hidden');
    }
  };
  const toggleThemeSelectorVisibility = (e) => {
    e.preventDefault();

    const themeSelector = document.querySelector('.theme-selector-wrap');
    if (!themeSelector) return;

    if (themeSelector?.classList.contains('hidden')) {
      themeSelector.classList.remove('hidden');
      document.querySelector('#theme-input').focus();
    } else {
      themeSelector.classList.add('hidden');
    }
  };

  return (
    <nav className={classList.join(' ')}>
      <div className="upper-nav">
        <NavLink to="landing">
          <span className="material-symbols-outlined home">
            home
          </span>
          <p className="nav-link-text">Home</p>
        </NavLink>
        <NavLink to="resume">
          <span className="material-symbols-outlined info">
            description
          </span>
          <p className="nav-link-text">Resume</p>
        </NavLink>
        <NavLink to="skills">
          <span className="material-symbols-outlined">
            code
          </span>
          <p className="nav-link-text">Skills</p>
        </NavLink>
        <NavLink to="portfolio">
          <span className="material-symbols-outlined projects">
            cases
          </span>
          <p className="nav-link-text">Projects</p>
        </NavLink>
        <NavLink to="contact">
          <span className="material-symbols-outlined">
            call
          </span>
          <p className="nav-link-text">Reach out</p>
        </NavLink>
      </div>

      <div className="lower-nav">
        <button type="button" onClick={toggleDirectLinksVisibility}>
          <span className="material-symbols-outlined">
            account_circle
          </span>
          <p className="nav-link-text">Direct Links</p>
        </button>
        <button type="button" onClick={toggleThemeSelectorVisibility}>
          <span className="material-symbols-outlined">
            settings
          </span>
          <p className="nav-link-text">Themes</p>
        </button>

        <button
          className="btn-toggle-sidebar"
          type="button"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="material-symbols-outlined">
            {expanded ? 'chevron_left' : 'chevron_right'}
          </span>
        </button>
      </div>
    </nav>
  );
}
