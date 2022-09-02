/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-array-index-key */
import React from 'react';

// Subcomponent/Data imports
import { frontEndSkills, backEndSkills, devOpsSkills } from './skills';

export default function AboutSkills() {
  // Draggable skills
  let draggableHeight = 0;
  const skillDragStart = (e) => {
    draggableHeight = (e.target.offsetHeight / document.querySelector('.about-subsection-body').offsetHeight) * 100;
    e.dataTransfer.setData('text/plain', e.target.getAttribute('data-skill-title'));
    e.target.classList.add('hidden');
  };

  let lastClosestSkill = null;
  const skillSectionDragOver = (e) => {
    e.preventDefault();

    const closestSkillBody = e.target.closest('.skills-body');
    const closestSkillWrap = e.target.closest('.skill-wrap');
    if (!closestSkillWrap || !closestSkillBody) {
      if (!closestSkillBody) {
        for (const skillWrap of document.querySelectorAll('.skill-wrap')) {
          skillWrap.classList.remove('hidden');
          skillWrap.style.top = '0';
          skillWrap.classList.remove('transitioned');
        }
      }
      return;
    }

    const currentClosestSkill = closestSkillWrap.getAttribute('data-skill-title');
    if (lastClosestSkill !== currentClosestSkill) {
      lastClosestSkill = currentClosestSkill;
      for (const skillWrap of document.querySelectorAll('.skill-wrap')) {
        skillWrap.classList.remove('hidden');
        skillWrap.style.top = '0';
        skillWrap.classList.remove('transitioned');
      }
    }

    const closestDataId = parseInt(closestSkillWrap.getAttribute('data-skill-id'), 10);

    // eslint-disable-next-line no-restricted-syntax
    for (const skillWrap of document.querySelectorAll('.skill-wrap')) {
      skillWrap.classList.remove('hidden');
      skillWrap.style.top = '0';
      skillWrap.classList.remove('transitioned');
    }
    for (const skillWrap of closestSkillBody.children) {
      if (skillWrap.getAttribute('data-skill-id') >= closestDataId) {
        skillWrap.style.top = `${draggableHeight}vh`;
      }
    }
  };

  const skillSectionDragDrop = (e) => {
    e.preventDefault();
    for (const skillWrap of document.querySelectorAll('.skill-wrap')) {
      skillWrap.classList.remove('hidden');
      skillWrap.style.top = '0';
      skillWrap.classList.add('transitioned');
    }

    const skill = e.dataTransfer.getData('text/plain');
    const draggedSkillEl = document.querySelector(`[data-skill-title="${skill}"]`);
    draggedSkillEl.classList.remove('hidden');

    const dropSkillBodyArea = e.target.closest('.skills-body');
    if (!dropSkillBodyArea) {
      return;
    }
    if (lastClosestSkill !== null && dropSkillBodyArea.children.length > 0) {
      dropSkillBodyArea.insertBefore(draggedSkillEl, document.querySelector(`[data-skill-title='${lastClosestSkill}']`));
    } else {
      dropSkillBodyArea.append(draggedSkillEl);
    }

    let dataIndex = 0;
    for (const skillWrap of dropSkillBodyArea.children) {
      skillWrap.setAttribute('data-skill-id', dataIndex);
      dataIndex += 1;
    }
  };

  // Rendering
  const renderSkills = (skillsObj, className) => (
    <section className={`skill-section ${className}`} onDragOver={skillSectionDragOver} onDrop={skillSectionDragDrop}>
      <div className="title-wrap">
        <img src={skillsObj.area.imagePath} alt="" className="logo" draggable={false} />
        <h3 className="title">{skillsObj.area.title}</h3>
      </div>
      <div className="skills-body">
        {skillsObj.skills.map((skill, i) => (
          <div className="skill-wrap" key={i} data-skill-title={skill.title} data-skill-id={i} draggable onDragStart={skillDragStart}>
            <div className="skill-title-wrap">
              <img src={skill.imagePath} alt="" className="logo draggable" draggable={false} />
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
    </section>
  );

  return (
    <section className="about-subsection skills">
      <p className="tab-title">Dev Toolkit</p>
      <div className="about-subsection-body skills">
        <div className="skill-container">
          {renderSkills(frontEndSkills, 'frontend')}
          {renderSkills(backEndSkills, 'backend')}
          {renderSkills(devOpsSkills, 'devops')}
        </div>
      </div>
    </section>
  );
}
