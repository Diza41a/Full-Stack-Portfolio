import React from 'react';

// Subcomponent imports
import Colored from '../styles/Colored';

const { Subsection } = Colored.About;

export default function AboutSkills() {
  return (
    <Subsection className="about-subsection skills">
      <p className="tab-title">Dev Toolkit</p>
      <div className="about-subsection-body" />
    </Subsection>
  );
}
