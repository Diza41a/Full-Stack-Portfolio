/* eslint-disable react/no-array-index-key */
import React from 'react';

// Subcomponent/Data imports
import Colored from '../styles/Colored';
import { frontEndSkills, backEndSkills, devOpsSkills } from './skills';

const { Subsection, SkillSection } = Colored.About;

export default function AboutSkills() {
  // Rendering
  const renderSkills = (skillsObj) => (
    <SkillSection className="skill-section">
      <div className="title-wrap">
        <img src={skillsObj.area.imagePath} alt="" className="logo" />
        <h3 className="title">{skillsObj.area.title}</h3>
      </div>
      <div className="skills-body">
        {skillsObj.skills.map((skill, i) => (
          <div className="skill-wrap" key={i}>
            <div className="skill-title-wrap">
              <img src={skill.imagePath} alt="" className="logo" />
              <h5 className="skill-title">{skill.title}</h5>
            </div>
            <ul className="subskill-list">
              {skill.subskills.map((subskill, j) => (
                <li key={j}>{subskill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SkillSection>
  );

  return (
    <Subsection className="about-subsection skills">
      <p className="tab-title">Dev Toolkit</p>
      <div className="about-subsection-body skills">
        <div className="skill-container">
          {renderSkills(frontEndSkills)}
          {renderSkills(backEndSkills)}
          {renderSkills(devOpsSkills)}
        </div>
      </div>
    </Subsection>
  );
}
