import React from 'react';

// Subcomponent imports
import Colored from '../styles/Colored';

const { Subsection, SkillSection } = Colored.About;

export default function AboutSkills() {
  return (
    <Subsection className="about-subsection skills">
      <p className="tab-title">Dev Toolkit</p>
      <div className="about-subsection-body skills">
        <div className="skill-container">
          <SkillSection className="skill-section front-end">
            <div className="title-wrap">
              <img src="./assets/images/about-skills/frontend.svg" alt="" className="logo" />
              <h3 className="title">Front End</h3>
            </div>
            <div className="skills-body">
              <div className="skill-wrap">
                <div className="skill-title-wrap">
                  <img src="" alt="" className="logo" />
                  <h5 className="skill-title">React 18</h5>
                </div>
                <ul className="subskill-list">
                  <li>Router</li>
                  <li>Hooks</li>
                </ul>
              </div>
            </div>
          </SkillSection>
          <SkillSection className="skill-section back-end">
            {/*  */}
          </SkillSection>
          <SkillSection className="skill-section dev-ops">
            {/*  */}
          </SkillSection>
        </div>
      </div>
    </Subsection>
  );
}
