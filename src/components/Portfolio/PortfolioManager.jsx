/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-cycle */
import React, {
  createContext, useState, useContext, useEffect,
} from 'react';

// Subcomponent imports
import ProjectSelector from './ProjectSelector';
import ProjectWrap from './ProjectWrap';
import { projects } from './projects';
import { MainContext } from '../reusable/MainLayout';

// Current Project Context
export const ProjectContext = createContext(projects[0]);

export default function PortfolioManager() {
  const { setCurrentFileName } = useContext(MainContext);
  const [currentProject, setProject] = useState(projects[0]);

  // ComponentDidMount
  useEffect(() => {
    setCurrentFileName('PortfolioManager.jsx');
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ProjectContext.Provider value={{ currentProject, setProject }}>
      <section className="portfolio-manager-wrap">
        <ProjectSelector />
        <ProjectWrap />
      </section>
    </ProjectContext.Provider>
  );
}
