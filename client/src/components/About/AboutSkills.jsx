/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Subcomponent/Data imports
import { frontEndSkills, backEndSkills, devOpsSkills } from './skills';

export default function AboutSkills() {
  const [skills, setSkills] = useState({ frontEndSkills, backEndSkills, devOpsSkills });

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
          <div className="skill-wrap grabbable" key={i} data-skill-title={skill.title} data-skill-id={i} draggable onDragStart={skillDragStart}>
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

  // Shuffle minigame
  const getRandomIndex = (upperFloor) => Math.floor(Math.random() * upperFloor);

  const shuffleSkills = () => {
    const unified = [
      ...skills.frontEndSkills.skills,
      ...skills.backEndSkills.skills,
      ...skills.devOpsSkills.skills,
    ];
    const shuffled = [];
    while (unified.length) {
      const index = getRandomIndex(unified.length);
      shuffled.push(unified[index]);
      unified.splice(index, 1);
    }

    const sectionLen = Math.round(shuffled.length / 3);
    const randomSections = [
      shuffled.slice(0, sectionLen),
      shuffled.slice(sectionLen, sectionLen * 2),
      shuffled.slice(sectionLen * 2, shuffled.length),
    ];
    const newSkills = {
      frontEndSkills: {
        area: skills.frontEndSkills.area,
      },
      backEndSkills: {
        area: skills.backEndSkills.area,
      },
      devOpsSkills: {
        area: skills.devOpsSkills.area,
      },
    };

    for (let i = 0; i < 3; i += 1) {
      const randomIndex = getRandomIndex(randomSections.length);
      if (i === 0) {
        newSkills.frontEndSkills.skills = randomSections[randomIndex];
      } else if (i === 1) {
        newSkills.backEndSkills.skills = randomSections[randomIndex];
      } else if (i === 2) {
        newSkills.devOpsSkills.skills = randomSections[randomIndex];
      }
      randomSections.splice(randomIndex, 1);
    }

    // document.querySelectorAll('.skills-body').forEach((skillBodyEl) => {
    //   skillBodyEl.classList.add('shuffling');
    // });
    document.querySelector('.skill-container').classList.add('shuffling');
    document.querySelectorAll('.disabled-skill-tool').forEach((skillTool) => skillTool.classList.remove('disabled-skill-tool'));
    setTimeout(() => {
      setSkills(newSkills);
    }, 750);
  };

  const resetSkillTools = () => {
    document.querySelector('.skill-container').classList.add('shuffling');
    document.querySelectorAll('.skill-tool').forEach((skillTool) => {
      if (!skillTool.classList.contains('shuffle-btn')) {
        skillTool.classList.add('disabled-skill-tool');
      }
    });
  };

  const resetSkills = (e) => {
    const skillToolBtn = e.target.closest('.skill-tool');
    if (!skillToolBtn || skillToolBtn.classList.contains('disabled-skill-tool')) {
      return;
    }

    resetSkillTools();

    setTimeout(() => {
      setSkills({ frontEndSkills, backEndSkills, devOpsSkills });
    }, 750);
  };

  const getSubmittedTitles = (section) => [...document.querySelector(`.skill-section.${section}`).children[1].children].map((skill) => (
    skill.getAttribute('data-skill-title')
  )).sort();
  const getSortedSkillAnswers = (skillsObj) => skillsObj.skills.map((skill) => skill.title).sort();
  const skillsQuiz = (e) => {
    const skillToolBtn = e.target.closest('.skill-tool');
    if (!skillToolBtn || skillToolBtn.classList.contains('disabled-skill-tool')) {
      return;
    }

    const tooltipEl = document.querySelector('.tooltip');

    const submission = {
      frontend: {
        submitted: getSubmittedTitles('frontend'),
        correct: getSortedSkillAnswers(frontEndSkills),
      },
      backend: {
        submitted: getSubmittedTitles('backend'),
        correct: getSortedSkillAnswers(backEndSkills),
      },
      devops: {
        submitted: getSubmittedTitles('devops'),
        correct: getSortedSkillAnswers(devOpsSkills),
      },
    };

    for (const section of Object.keys(submission)) {
      let wrong = false;
      if (submission[section].correct.length !== submission[section].submitted.length) {
        wrong = true;
      }
      if (!wrong) {
        for (let i = 0; i < submission[section].correct.length; i += 1) {
          if (submission[section].correct[i] !== submission[section].submitted[i]) {
            wrong = true;
            break;
          }
        }
      }
      if (wrong) {
        tooltipEl.classList.add('display', 'wrong');
        tooltipEl.innerText = 'Wrong';

        setTimeout(() => {
          tooltipEl.classList.remove('display', 'wrong');
        }, 4000);
        return;
      }
    }

    resetSkillTools();
    tooltipEl.classList.add('display');
    tooltipEl.innerText = 'Correct!';
    setTimeout(() => {
      tooltipEl.classList.remove('display');
    }, 4000);
    // document.querySelector('.skill-container').classList.add('shuffling');
    setTimeout(() => {
      setSkills({ frontEndSkills, backEndSkills, devOpsSkills });
    }, 750);
  };

  return (
    <section className="about-subsection skills">
      <p className="tab-title">Dev Toolkit</p>
      <div className="about-subsection-body skills">

        <div className="shuffle-btns">
          <button type="button" className="skill-tool disabled-skill-tool" data-task="confirm" onClick={skillsQuiz}>
            <span className="material-symbols-outlined">
              check
            </span>
          </button>
          <button type="button" className="skill-tool disabled-skill-tool" onClick={resetSkills}>
            <span className="material-symbols-outlined">
              restart_alt
            </span>
          </button>
          <button type="button" className="skill-tool shuffle-btn" onClick={shuffleSkills}>
            <span className="material-symbols-outlined">
              shuffle
            </span>
          </button>

          <p className="tooltip">Correcto!</p>
        </div>

        <div className="skill-container" key={uuidv4()}>
          {renderSkills(skills.frontEndSkills, 'frontend')}
          {renderSkills(skills.backEndSkills, 'backend')}
          {renderSkills(skills.devOpsSkills, 'devops')}
        </div>
      </div>
    </section>
  );
}
