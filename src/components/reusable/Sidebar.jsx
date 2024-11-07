import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  House as HouseIcon,
  FileText as FileIcon,
  Code as CodeIcon,
  BriefcaseBusiness as BriefcaseIcon,
  Phone as PhoneIcon,
  CircleUser as UserIcon,
  Cog as CogIcon,
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
} from 'lucide-react';

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

  useEffect(() => {
    const sidebarToggleEvent = new Event('sidebar_toggle');

    document.dispatchEvent(sidebarToggleEvent);
  }, [expanded]);

  return (
    <nav className={classList.join(' ')}>
      <div className="upper-nav">
        <NavLink to="landing">
          <HouseIcon />
          <p className="nav-link-text">Home</p>
        </NavLink>
        <NavLink to="about-me">
          <FileIcon />
          <p className="nav-link-text">About me & Resume</p>
        </NavLink>
        <NavLink to="skills">
          <CodeIcon />
          <p className="nav-link-text">Skills</p>
        </NavLink>
        <NavLink to="portfolio">
          <BriefcaseIcon />
          <p className="nav-link-text">Projects</p>
        </NavLink>
        <NavLink to="contact">
          <PhoneIcon />
          <p className="nav-link-text">Reach out</p>
        </NavLink>
      </div>

      <div className="lower-nav">
        <button type="button" onClick={toggleDirectLinksVisibility}>
          <UserIcon />
          <p className="nav-link-text">Direct Links</p>
        </button>
        <button type="button" onClick={toggleThemeSelectorVisibility}>
          <CogIcon />
          <p className="nav-link-text">Themes</p>
        </button>

        <button
          className="btn-toggle-sidebar"
          type="button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </button>
      </div>
    </nav>
  );
}
