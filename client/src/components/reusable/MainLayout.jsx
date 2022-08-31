/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { useState, createContext, useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

// Component imports
import Particle from './Particle';
import startMatrixCanvas from './matrix';
import DirectLinks from './DirectLinks';

export const MainContext = createContext('default');

export const getCurrentTime = () => {
  const dateTime = new Date();
  const datePart = dateTime.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  const timePart = dateTime.toLocaleTimeString(undefined, {
    hour: 'numeric', minute: 'numeric', second: 'numeric', timezone: 'EST',
  });
  return `${datePart} ${timePart}`;
};

export default function MainLayout() {
  const navigate = useNavigate();

  const [globalTheme, setGlobalTheme] = useState('matrix');
  const [time, setTime] = useState(getCurrentTime());
  const [currentFileName, setCurrentFileName] = useState('Landing.jsx');

  // Temp
  const background = {
    image: 'url("assets/images/background-curves.png")',
    color: '#181924',
  };
  if (globalTheme === 'matrix') {
    background.image = 'url("./assets/images/background-matrix.png")';
  }

  // ComponentDidMount
  useEffect(() => {
    // Update the clock
    const clockInterval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    // Temp
    if (globalTheme === 'matrix') {
      startMatrixCanvas();
    }

    // Cleanup after unmounting (side effect)
    return function cleanup() {
      clearInterval(clockInterval);
    };
  }, []);

  // To desktop
  const toDesktop = (e) => {
    e.preventDefault();
    navigate('/');
  };

  // Toggle direct link visibility
  const toggleDirectLinks = (e) => {
    e.preventDefault();
    const directLinks = document.querySelector('.direct-links-card');
    if (!directLinks) {
      return;
    }
    if (directLinks?.classList.contains('hidden')) {
      directLinks.classList.remove('hidden');
    } else {
      directLinks.classList.add('hidden');
    }
  };

  return (
    <MainContext.Provider value={{
      currentFileName, setCurrentFileName, globalTheme, setGlobalTheme,
    }}
    >
      {/* // eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <div id="app" className="matrix" style={{ backgroundColor: background.color, backgroundImage: background.image }}>
        <header className="toolbar">
          <div className="buttons">
            <button type="button" style={{ color: 'white', backgroundColor: 'red' }} onClick={toDesktop}>
              <i className="fa-solid fa-x" />
            </button>
            <button type="button" style={{ color: 'black', backgroundColor: '#FFDE59' }}>
              <i className="fa-solid fa-compress" />
            </button>
            <button type="button" style={{ color: 'white', backgroundColor: '#7ED957' }}>
              <i className="fa-solid fa-minus" />
            </button>
          </div>

          <p className="file-name">{`${currentFileName} - Davyd Zakorchennyi`}</p>

          <strong className="time">{time}</strong>
        </header>

        <div className="content-body-wrap">
          <nav className="sidebar">
            <div className="main-nav">
              <NavLink to="landing">
                {
                  // eslint-disable-next-line max-len
                /* <i className="fa-solid fa-flag-checkered" style={{ transform: 'rotate(20deg)' }} /> */
                }
                <span className="material-symbols-outlined flag">
                  flag
                </span>
              </NavLink>
              <NavLink to="about">
                {/* <i className="fa-solid fa-circle-info" /> */}
                <span className="material-symbols-outlined info">
                  contact_support
                </span>
              </NavLink>
              <NavLink to="portfolio">
                {/* <i className="fa-solid fa-briefcase" /> */}
                <span className="material-symbols-outlined">
                  cases
                </span>
              </NavLink>
              <NavLink to="contact">
                {/* <i className="fa-solid fa-phone" /> */}
                <span className="material-symbols-outlined">
                  call
                </span>
              </NavLink>
            </div>
            <div className="second-nav">
              {/* <i className="fa-solid fa-user" onClick={toggleDirectLinks} /> */}
              <span className="material-symbols-outlined" onClick={toggleDirectLinks}>
                account_circle
              </span>
              {/* <i className="fa-solid fa-gear" /> */}
              <span className="material-symbols-outlined">
                settings
              </span>
            </div>
          </nav>

          <div className="content">
            {globalTheme !== 'matrix' ? <Particle /> : <canvas id="c" className="matrix-canvas" />}
            <Outlet />
          </div>

          <DirectLinks />

        </div>
      </div>
    </MainContext.Provider>
  );
}
