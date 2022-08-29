/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';

// Subcomponent/Data imports
import Colored from '../styles/Colored';
import { projects, inProgress } from './projects';
import { ProjectContext } from './PortfolioManager';

const { Portfolio } = Colored;

export default function ProjectSelector() {
  const { currentProject, setProject } = useContext(ProjectContext);

  // Helpers
  const switchProject = (e) => {
    const selected = e.target?.getAttribute('data-project');
    if (selected) {
      for (let i = 0; i < projects.length; i += 1) {
        if (projects[i].title === selected) {
          setProject(projects[i]);
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

  // Rendering
  const renderProjects = (arr, disabled, listName) => (
    <section className="project-selector-section">
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
    <Portfolio.Selector className="project-selector">
      <div className="project-selector-list shrinked">
        {renderProjects(projects, false, 'Projects')}
        <section className="project-selector-section">
          <h3 className="title">Recent</h3>
          <ul>
            <li>Atelier Clothing Platform</li>
          </ul>
        </section>
        {renderProjects(inProgress, true, 'In Progress')}
      </div>

      <i className="fa-solid fa-angle-down selector-toggle" onClick={toggleProjectList} />
    </Portfolio.Selector>
  );
}