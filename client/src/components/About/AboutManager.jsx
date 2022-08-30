/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

// Subcomponent imports
import AboutDescription from './AboutDescription';
import AboutSkills from './AboutSkills';
import Colored from '../styles/Colored';
import { MainContext } from '../reusable/MainLayout';

const { SubsectionSelector } = Colored.About;

export default function AboutManager() {
  const { setCurrentFileName } = useContext(MainContext);
  const [subsection, changeSubsection] = useState('introduction');
  const navigate = useNavigate();

  // ComponentDidMount
  useEffect(() => {
    const linkArr = window.location.href.split('/');
    const link = linkArr[linkArr.length - 1];
    if (link === 'skills') {
      changeSubsection('skills');
    } else if (link === 'about' || link === '/') {
      navigate('introduction');
    }
    setCurrentFileName('AboutManager.jsx');
  }, []);

  const toggleSubsectionList = () => {
    const subsectionList = document.querySelector('.about-section-selector-list');
    if (subsectionList?.classList.contains('shrinked')) {
      subsectionList?.classList.remove('shrinked');
    } else {
      subsectionList?.classList.add('shrinked');
    }
  };

  return (
    <>
      <SubsectionSelector className="about-section-selector">
        <div className="about-section-selector-list shrinked">
          <NavLink
            to="introduction"
            data-section="introduction"
            onClick={() => {
              changeSubsection('introduction');
            }}
          >
            <span className="title">Description</span>
            <span className="description">Brief introduction to who I am as a professional</span>
          </NavLink>
          <NavLink
            to="skills"
            data-section="skills"
            onClick={() => {
              changeSubsection('skills');
            }}
          >
            <span className="title">Toolkit</span>
            <span className="description">Relevant skills and knowledge</span>
          </NavLink>
        </div>
        <i className="fa-solid fa-angle-down selector-toggle" onClick={toggleSubsectionList} />
      </SubsectionSelector>

      { subsection === 'skills' ? <AboutSkills /> : <AboutDescription />}
    </>
  );
}
