/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
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
    <nav className="sidebar">
      <div className="upper-nav">
        <NavLink to="landing">
          <span className="material-symbols-outlined home">
            home
          </span>
        </NavLink>
        <NavLink to="about">
          <span className="material-symbols-outlined info">
            contact_support
          </span>
        </NavLink>
        <NavLink to="portfolio">
          <span className="material-symbols-outlined">
            cases
          </span>
        </NavLink>
        <NavLink to="contact">
          <span className="material-symbols-outlined">
            call
          </span>
        </NavLink>
      </div>
      <div className="lower-nav">
        <span className="material-symbols-outlined" onClick={toggleDirectLinksVisibility}>
          account_circle
        </span>
        <span className="material-symbols-outlined" onClick={toggleThemeSelectorVisibility}>
          settings
        </span>
      </div>
    </nav>
  );
}
