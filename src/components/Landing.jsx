/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useContext } from 'react';

// Subcomponent imports
import { MainContext } from './reusable/MainLayout';

export default function Landing() {
  const { setCurrentFileName } = useContext(MainContext);

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

    setCurrentFileName('Landing.jsx');

    const letterEls = document.querySelectorAll('.landing-letter');
    let iterationCount = 0;
    const letterInterval = setInterval(() => {
      if (iterationCount >= 3) {
        iterationCount = 0;
      } else {
        const randomIndex = Math.floor(Math.random() * letterEls.length);
        letterEls[randomIndex].classList.add('enlarging');
        setTimeout(() => {
          letterEls[randomIndex].classList.remove('enlarging');
        }, 500);
      }
    }, 3000);
    // let delay = 0.1;
    // letterEls.forEach((letterEl) => {
    //   letterEl.classList.add('enlarging');
    //   letterEl.style.animationDelay = `${delay}s`;
    //   delay += 0.1;
    // });

    document.querySelector('.main-nav').children[0].classList.add('active');

    // Cleanup after unmounting (side effect)
    return function cleanup() {
      clearInterval(letterInterval);
      clearInterval(sliderInterval);
      window.removeEventListener('resize', sliderFunction);
      document.querySelector('.main-nav').children[0].classList.remove('active');
    };
  }, []);

  return (
    <div className="landing-wrap">
      <p className="landing-nav-lbl">
        <i className="fa-solid fa-arrow-left" />
        {' Nav Options'}
      </p>

      <div className="introduction">
        <p className="static">
          {
          [...'Hello There!'].map((letter, i) => (
            <span key={i} className="static landing-letter">{letter !== ' ' ? letter : '\u00A0'}</span>
          ))
        }
        </p>
        <p className="static">
          {
          [...'I\'m Davyd, and I\'m a(n)'].map((letter, i) => (
            <span key={i} className="static landing-letter">{letter !== ' ' ? letter : '\u00A0'}</span>
          ))
        }
        </p>
        <div className="dynamic">
          <p>Full Stack Engineer</p>
          <p>MERN Developer</p>
          <p>Agile Practitioner</p>
          <p>UI Enthusiast</p>
          <p>Continuous Learner</p>
        </div>
      </div>

      <div className="photo-wrap">
        <img src="./assets/images/projects/tablet-robot.png" alt="" className="robotic-hand" />
        <img src="./assets/images/about-me/corporate.jpg" alt="" className="photo" />
      </div>

    </div>
  );
}
