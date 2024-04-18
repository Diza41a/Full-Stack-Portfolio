/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';

// Subcomponent/Data imports
import { MainContext } from './MainLayout';

export default function ThemeSelector() {
  const { globalTheme, setGlobalTheme } = useContext(MainContext);

  // Helpers
  const manageThemeSelection = (e) => {
    const theme = e?.target.getAttribute('data-theme');
    document.querySelector('.theme-selector-wrap').classList.add('hidden');
    if (!theme || theme === globalTheme) {
      return;
    }
    document.querySelector('#app').className = theme;
    document.querySelector('#theme-input').value = '';
    document.querySelectorAll('.theme-option').forEach((themeOptionEl) => {
      themeOptionEl.style.display = 'initial';
    });
    setGlobalTheme(theme);
    localStorage.setItem('dz_portfolio_theme', theme);
  };
  const manageThemeKeyScroll = (e) => {
    if (e.key === 'Enter') {
      document.querySelector('.theme-selector-wrap').classList.add('hidden');
      return;
    }

    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') {
      return;
    }

    const themeIndex = parseInt(document.querySelector('.theme-option.selected').getAttribute('data-index'), 10);
    let theme = 'regular';
    const availableThemeIndexes = [...document.querySelectorAll('.theme-option')]
      .filter((themeOptionEl) => themeOptionEl.style.display !== 'none')
      .map((themeOption) => parseInt(themeOption.getAttribute('data-index'), 10));

    if (availableThemeIndexes.length === 0) {
      return;
    }
    if (availableThemeIndexes.length === 1) {
      if (themeIndex === availableThemeIndexes[0]) {
        return;
      }
    }

    const i = availableThemeIndexes.indexOf(themeIndex);
    if (e.key === 'ArrowDown') {
      if (i === availableThemeIndexes.length - 1) {
        theme = document.querySelector(`.theme-option[data-index="${availableThemeIndexes[0]}"]`).getAttribute('data-theme');
      } else {
        theme = document.querySelector(`.theme-option[data-index="${availableThemeIndexes[i + 1]}"]`).getAttribute('data-theme');
      }
      setGlobalTheme(theme);
      localStorage.setItem('dz_portfolio_theme', theme);
    } else if (e.key === 'ArrowUp') {
      if (i === 0) {
        theme = document.querySelector(`.theme-option[data-index="${availableThemeIndexes[availableThemeIndexes.length - 1]}"]`).getAttribute('data-theme');
      } else {
        theme = document.querySelector(`.theme-option[data-index="${availableThemeIndexes[i - 1]}"]`).getAttribute('data-theme');
      }
      setGlobalTheme(theme);
      localStorage.setItem('dz_portfolio_theme', theme);
    }
  };
  const searchThemes = (e) => {
    const searchVal = e.target.value.trim().toLowerCase();
    const themeOptionEls = document.querySelectorAll('.theme-option');
    themeOptionEls.forEach((themeOptionEl) => {
      const dataTheme = themeOptionEl.getAttribute('data-theme');
      if (!dataTheme.includes(searchVal)) {
        themeOptionEl.style.display = 'none';
      } else {
        themeOptionEl.style.display = 'initial';
      }
    });
  };

  // Rendering
  const renderThemeOptions = (options) => (
    <>
      {options.map((option, i) => (
        <button
          type="button"
          className={option === globalTheme ? 'theme-option selected' : 'theme-option'}
          data-theme={option}
          key={i}
          data-index={i}
        >
          {option}
        </button>
      ))}
    </>
  );

  return (
    <div className="theme-selector-wrap hidden" onClick={manageThemeSelection} onKeyUp={manageThemeKeyScroll}>
      <input type="text" id="theme-input" className="title" placeholder="Enter theme name..." autoComplete="off" onKeyUp={searchThemes} />
      {renderThemeOptions(['regular', 'matrix'])}
    </div>
  );
}
