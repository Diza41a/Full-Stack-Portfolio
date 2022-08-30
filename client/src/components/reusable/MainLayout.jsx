/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { useState, createContext, useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

// Component imports
import Particle from './Particle';
import Colored, { background } from '../styles/Colored';
import DirectLinks from './DirectLinks';

const { Toolbar, Nav } = Colored;

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

  const [globalTheme, setGlobalTheme] = useState('default');
  const [time, setTime] = useState(getCurrentTime());
  const [currentFileName, setCurrentFileName] = useState('Landing.jsx');

  // ComponentDidMount
  useEffect(() => {
    // Update the clock
    const clockInterval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
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
      <div id="app" style={{ backgroundColor: background.color, backgroundImage: background.image }}>
        <Toolbar>
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
        </Toolbar>

        <div className="content-body-wrap">
          <Nav>
            <div className="main-nav">
              <NavLink to="landing">
                <i className="fa-solid fa-flag-checkered" style={{ transform: 'rotate(20deg)' }} />
              </NavLink>
              <NavLink to="about">
                <i className="fa-solid fa-circle-info" />
              </NavLink>
              <NavLink to="portfolio">
                <i className="fa-solid fa-briefcase" />
              </NavLink>
              <NavLink to="contact">
                <i className="fa-solid fa-phone" />
              </NavLink>
            </div>
            <div className="second-nav">
              <i className="fa-solid fa-user" onClick={toggleDirectLinks} />
              <i className="fa-solid fa-gear" />
            </div>
          </Nav>

          <div className="content">
            <Particle />
            <Outlet />
          </div>

          <DirectLinks />

        </div>
      </div>
    </MainContext.Provider>
  );
}
