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
          Home
        </NavLink>
        <NavLink to="about">
          <span className="material-symbols-outlined info">
            contact_support
          </span>
          About me
        </NavLink>
        <NavLink to="skills">
          <span className="material-symbols-outlined">
            code
          </span>
          Skills
        </NavLink>
        <NavLink to="portfolio">
          <span className="material-symbols-outlined projects">
            cases
          </span>
          Projects
        </NavLink>
        <NavLink to="contact">
          <span className="material-symbols-outlined">
            call
          </span>
          Reach out
        </NavLink>
      </div>

      <div className="lower-nav">
        <button type="button" onClick={toggleDirectLinksVisibility}>
          <span className="material-symbols-outlined">
            account_circle
          </span>
          Direct Links
        </button>
        <button type="button" onClick={toggleThemeSelectorVisibility}>
          <span className="material-symbols-outlined">
            settings
          </span>
          Themes
        </button>
      </div>
    </nav>
  );
}
