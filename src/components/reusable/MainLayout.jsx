/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { useState, createContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// Component imports
import Particle from './Particle';
import startMatrixCanvas from './matrix';
import ThemeSelector from './ThemeSelector';
import DirectLinks from './DirectLinks';
import Sidebar from './Sidebar';

export const MainContext = createContext('regular');

export const getCurrentTime = () => {
  const dateTime = new Date();
  const datePart = dateTime.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  const timePart = dateTime.toLocaleTimeString(undefined, {
    hour: 'numeric', minute: 'numeric', second: 'numeric', timezone: 'EST',
  });
  return `${datePart} ${timePart}`;
};

export default function MainLayout() {
  const storedTheme = localStorage.getItem('dz_portfolio_theme') || 'matrix';
  const [globalTheme, setGlobalTheme] = useState(storedTheme);
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
      // WARNING -> updating the state causes rerender every second... duh!🙃
      // setTime(getCurrentTime());
      document.querySelector('strong.time').innerText = getCurrentTime();
    }, 1000);

    // Temp
    if (globalTheme === 'matrix') startMatrixCanvas();

    // Cleanup after unmounting (side effect)
    return function cleanup() {
      clearInterval(clockInterval);
    };
  }, []);

  // ComponentDidUpdate: Restart theme vars if needed
  useEffect(() => {
    if (globalTheme === 'matrix') {
      startMatrixCanvas();
    }
  }, [globalTheme]);

  return (
    <MainContext.Provider value={{
      currentFileName, setCurrentFileName, globalTheme, setGlobalTheme, lastLink: 'vscode/landing',
    }}
    >
      {/* // eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <div id="app" className={globalTheme} style={{ backgroundColor: background.color, backgroundImage: background.image }}>
        <header className="toolbar">
          <p className="file-name">{`${currentFileName} - Davyd Zakorchennyi`}</p>

          <strong className="time">{getCurrentTime()}</strong>
        </header>

        <div className="content-body-wrap">
          <Sidebar />

          <div className="content">
            {globalTheme !== 'matrix' ? <Particle /> : <canvas id="c" className="matrix-canvas" />}
            <Outlet />
          </div>

          <ThemeSelector />
          <DirectLinks />

        </div>
      </div>
    </MainContext.Provider>
  );
}
