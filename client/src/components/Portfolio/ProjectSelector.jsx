/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';

// Subcomponent/Data imports
import { projects, inProgress } from './projects';
import { ProjectContext } from './PortfolioManager';

export default function ProjectSelector() {
  const { currentProject, setProject } = useContext(ProjectContext);

  // Helpers
  const switchProject = (e) => {
    const selected = e.target?.getAttribute('data-project');
    if (selected) {
      for (let i = 0; i < projects.length; i += 1) {
        if (projects[i].title === selected) {
          setProject(projects[i]);

          const rightNow = new Date();
          const toLocalStorage = { title: projects[i].title, lastAccessed: rightNow };
          const recentProjects = JSON.parse(localStorage.getItem('dz_recent_projects')) || [toLocalStorage];
          let projectExists = false;
          recentProjects.forEach((item) => {
            if (item.title === projects[i].title) {
              // eslint-disable-next-line no-param-reassign
              item.lastAccessed = rightNow;
              projectExists = true;
            }
          });

          if (!projectExists) {
            recentProjects.push(toLocalStorage);
          }

          localStorage.setItem('dz_recent_projects', JSON.stringify(recentProjects));
        }
      }
    }
  };

  const toggleProjectList = () => {
    const projectList = document.querySelector('.project-selector-list');
    if (projectList?.classList.contains('shrinked')) {
      projectList?.classList.remove('shrinked');
    } else {
      projectList?.classList.add('shrinked');
    }
  };

  const updateRecentProjectList = (arr) => {
    const upToDate = [];
    const rightNow = new Date();
    for (const project of arr) {
      // If project wasn't accessed for 6+ hours, remove from recents
      if (Math.abs(rightNow - new Date(project.lastAccessed)) / 36e5 < 6) {
        upToDate.push(project);
      }
    }

    localStorage.setItem('dz_recent_projects', JSON.stringify(upToDate));
    return upToDate.sort((curr, next) => (
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      new Date(next.lastAccessed) - new Date(curr.lastAccessed)));
  };

  // Rendering
  const renderProjects = (arr, disabled, listName) => (
    <section className={`project-selector-section ${listName === 'Recent' ? 'recent' : null}`}>
      <h3 className="title">{listName}</h3>
      <ul className={disabled ? 'disabled' : ''} onClick={!disabled ? switchProject : null}>
        {arr.map((item, i) => (
          <li
            key={i}
            data-project={item.title}
            className={!disabled && item.title === currentProject.title ? 'selected' : null}
          >
            {item.title}

          </li>
        ))}
      </ul>
    </section>
  );

  return (
    <div className="project-selector">
      <div className="project-selector-list shrinked">
        {renderProjects(projects, false, 'Projects')}
        {(() => {
          let recentProjects = localStorage.getItem('dz_recent_projects');
          if (!recentProjects || JSON.parse(recentProjects).length === 0) {
            const initializeRecentProjects = [
              { title: currentProject.title, lastAccessed: new Date() },
            ];
            localStorage.setItem('dz_recent_projects', JSON.stringify(initializeRecentProjects));
            recentProjects = localStorage.getItem('dz_recent_projects');
          }

          recentProjects = JSON.parse(recentProjects);
          // Current project is time updated for being a default choice
          for (const project of recentProjects) {
            if (currentProject.title === project.title) {
              project.lastAccessed = new Date();
            }
          }
          recentProjects = updateRecentProjectList(recentProjects);

          return renderProjects(recentProjects, false, 'Recent');
        })()}
        {renderProjects(inProgress, true, 'In Progress')}
      </div>

      <i className="fa-solid fa-angle-down selector-toggle" onClick={toggleProjectList} />
    </div>
  );
}
