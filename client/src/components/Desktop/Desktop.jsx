/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getCurrentTime } from '../reusable/MainLayout';

export default function Desktop() {
  const [time, setTime] = useState(getCurrentTime());

  const navigate = useNavigate();
  const hours = new Date().getHours();

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

  // Navigate to url
  const openVsCode = () => {
    navigate('/vscode/landing');
  };

  const handleIconDrag = (e) => {
    const x = `${((e.clientX - e.target.offsetWidth / 2) / window.innerWidth) * 100}%`;
    const y = `${((e.clientY - e.target.offsetHeight / 2) / window.innerHeight) * 100}%`;
    e.target.style.top = y;
    e.target.style.left = x;
  };

  // Icon selection
  const selectedIcons = [];
  const selectIcon = (e) => {
    document.querySelectorAll('.desktop-icon-wrap').forEach((icon) => {
      if (!selectedIcons.includes(icon)) {
        icon?.classList.remove('selected');
      } else {
        const index = selectedIcons.indexOf(icon);
        selectedIcons.splice(index, 1);
      }
    });
    const closestIcon = e.target.closest('.desktop-icon-wrap');
    closestIcon?.classList.add('selected');
  };
  const multiSelect = (e) => {
    const selectionArea = document.querySelector('.selection-area');
    if (selectionArea?.classList?.contains('hidden')) {
      return;
    }

    const closestIcon = e?.target?.closest('.desktop-icon-wrap');
    if (!closestIcon) {
      return;
    }
    closestIcon.classList.add('selected');
    if (!selectedIcons.includes(closestIcon)) {
      selectedIcons.push(closestIcon);
    }
  };

  // Selection area logic
  let selectionStartX = 0;
  let selectionStartY = 0;
  const handleSelectionAreaDrag = (e) => {
    const selectionArea = document.querySelector('.selection-area');
    if (!selectionArea) {
      return;
    }

    const newPositionX = (e.clientX / window.innerWidth) * 100;
    const newPositionY = (e.clientY / window.innerHeight) * 100;

    let newWidth = newPositionX - selectionStartX;
    let newHeight = newPositionY - selectionStartX;

    if (newPositionX < selectionStartX) {
      selectionArea.style.left = `${newPositionX}%`;
      newWidth = Math.abs(newWidth);
    } else {
      selectionArea.style.left = `${selectionStartX}%`;
    }

    if (newPositionY < selectionStartY) {
      selectionArea.style.top = `${newPositionY}%`;
      newHeight = Math.abs(newHeight);
    } else {
      selectionArea.style.top = `${selectionStartY}%`;
    }

    selectionArea.style.width = `${newWidth}%`;
    selectionArea.style.height = `${newHeight}%`;
  };
  const handleSelectionAreaDragStart = (e) => {
    if (!e.target?.classList.contains('desktop-wrap')) {
      return;
    }

    const selectionArea = document.querySelector('.selection-area');
    if (!selectionArea) {
      return;
    }

    selectionStartX = (e.clientX / window.innerWidth) * 100;
    selectionStartY = (e.clientY / window.innerHeight) * 100;

    selectionArea?.classList.remove('hidden');
    selectionArea.style.top = `${selectionStartY}%`;
    selectionArea.style.left = `${selectionStartX}%`;

    document.querySelector('.desktop-wrap').addEventListener('mousemove', handleSelectionAreaDrag);
  };
  const handleSelectionAreaEnd = () => {
    const selectionArea = document.querySelector('.selection-area');
    if (!selectionArea) {
      return;
    }

    selectionArea?.classList.add('hidden');

    document.querySelector('.desktop-wrap').removeEventListener('mousemove', handleSelectionAreaDrag);
  };

  return (
    <div
      className="desktop-wrap"
      style={{ backgroundImage: `url(${hours >= 17 || hours <= 6 ? './assets/images/desktop/mac-night.jpeg' : './assets/images/desktop/mac-day.jpeg'})` }}
      onMouseDown={handleSelectionAreaDragStart}
      onMouseUp={handleSelectionAreaEnd}
      onClick={selectIcon}
    >
      <div className="toolkit">
        <p>
          <i className="fa-brands fa-apple" />
          <span className="app">Desktop</span>
        </p>
        <p className="os">MacOS - Catalina (0.75 Unstable)</p>
        <strong className="time">{time}</strong>
      </div>

      <div
        className="desktop-icon-wrap vscode-icon"
        onDoubleClick={openVsCode}
        onTouchEnd={openVsCode}
        draggable
        onDragEnd={handleIconDrag}
        onMouseEnter={multiSelect}
      >
        <img src="./assets/images/desktop/vs-code.png" alt="" className="desktop-icon" draggable={false} />
        <p className="icon-title">Open Portfolio</p>
      </div>

      <div className="selection-area hidden" />

    </div>
  );
}
