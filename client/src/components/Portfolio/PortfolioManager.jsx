import React from 'react';

// Subcomponent imports
import ProjectSelector from './ProjectSelector';
import ProjectWrap from './ProjectWrap';

export default function PortfolioManager() {
  return (
    <section className="portfolio-manager-wrap">
      <ProjectSelector />
      <ProjectWrap />
    </section>
  );
}
