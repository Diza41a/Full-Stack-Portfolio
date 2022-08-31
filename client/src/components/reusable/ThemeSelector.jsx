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
    if (!theme || theme === globalTheme) {
      return;
    }
    document.querySelector('#app').className = theme;
    document.querySelector('#theme-input').value = '';
    document.querySelector('.theme-selector-wrap').classList.add('hidden');
    document.querySelectorAll('.theme-option').forEach((themeOptionEl) => {
      themeOptionEl.style.display = 'initial';
    });
    setGlobalTheme(theme);
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
        >
          {option}
        </button>
      ))}
    </>
  );

  return (
    <div className="theme-selector-wrap hidden" onClick={manageThemeSelection}>
      <input type="text" id="theme-input" className="title" placeholder="Enter theme name..." onKeyUp={searchThemes} />
      {renderThemeOptions(['regular', 'matrix'])}
    </div>
  );
}
