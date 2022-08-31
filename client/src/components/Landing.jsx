/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useContext } from 'react';

// Subcomponent imports
import { MainContext } from './reusable/MainLayout';

export default function Landing() {
  const { setCurrentFileName } = useContext(MainContext);

  // ComponentDidMount
  useEffect(() => {
    setCurrentFileName('Landing.jsx');
  }, []);

  // Helpers
  const descriptionSlideshow = () => {
    const slideshowContainer = document.querySelector('div.dynamic');
    if (!slideshowContainer) {
      return;
    }
    slideshowContainer.scrollBehavior = 'smooth';
    const style = window.getComputedStyle(slideshowContainer, null).getPropertyValue('font-size');
    const fontSize = parseFloat(style);
    if (slideshowContainer.scrollTop + fontSize * 1.2 > fontSize * 1.2 * 4) {
      slideshowContainer.scrollTop = 0;
      return;
    }
    slideshowContainer.scrollTop += fontSize * 1.2;
  };

  // ComponentDidMount
  useEffect(() => {
    const sliderInterval = setInterval(descriptionSlideshow, 2000);
    const sliderFunction = () => {
      const slideshowContainer = document.querySelector('div.dynamic');
      slideshowContainer.scrollTop = 0;
    };
    window.addEventListener('resize', sliderFunction);

    // Cleanup after unmounting (side effect)
    return function cleanup() {
      clearInterval(sliderInterval);
      window.removeEventListener('resize', sliderFunction);
    };
  }, []);

  return (
    <div className="landing-wrap">
      <p className="landing-nav-lbl">
        <i className="fa-solid fa-arrow-left" />
        {' Nav Options'}
      </p>

      <div className="introduction">
        <p className="static">Hello There!</p>
        <p className="static">{'I\'m Davyd, and I\'m a'}</p>
        <div className="dynamic">
          <p>Immigrant</p>
          <p>Philanthropist</p>
          <p>Sweet Crepe</p>
          <p>Software Engineer</p>
          <p>Im going home</p>
        </div>
      </div>

      <div className="photo-wrap">
        <img src="./assets/images/projects/tablet-robot.png" alt="" className="robotic-hand" />
        <img src="./assets/images/about-me/corporate.jpg" alt="" className="photo" />
      </div>

    </div>
  );
}
