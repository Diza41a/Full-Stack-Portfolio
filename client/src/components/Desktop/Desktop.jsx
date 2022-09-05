/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable';
import { v4 as uuidv4 } from 'uuid';

import { getCurrentTime } from '../reusable/MainLayout';

export default function Desktop() {
  const [, setIcons] = useState(['vscode', 'checkers']);

  const navigate = useNavigate();
  const hours = new Date().getHours();

  // ComponentDidMount
  useEffect(() => {
    // Update the clock
    const clockInterval = setInterval(() => {
      // WARNING -> updating the state causes rerender every second... duh!🙃
      // setTime(getCurrentTime());
      document.querySelector('strong.time').innerText = getCurrentTime();
    }, 1000);
    window.addEventListener('resize', () => {
      // const vscodeIcon = document.querySelector('.desktop-icon-wrap');
      // const checkersIcon = document.querySelector('.checkers-icon');
      // vscodeIcon.style.transform = 'translate(0, 0)';
      // checkersIcon.style.transform = 'translate(0, 0)';
      setIcons(['vscode', 'checkers']);
    });
    // Cleanup after unmounting (side effect)
    return function cleanup() {
      clearInterval(clockInterval);
    };
  }, []);

  // Open apps
  const openVsCode = () => {
    navigate('/vscode/landing');
  };

  const openCheckers = () => {
    document.querySelector('#checkers-iframe').style.display = 'initial';
  };

  const closeCheckers = (e) => {
    e.preventDefault();
    console.log('here', document.querySelector('#checkers-iframe').style.display);
    document.querySelector('#checkers-iframe').style.display = 'none';
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
  // const multiSelect = (e) => {
  //   const selectionArea = document.querySelector('.selection-area');
  //   if (selectionArea?.classList?.contains('hidden')) {
  //     return;
  //   }

  //   const closestIcon = e?.target?.closest('.desktop-icon-wrap');
  //   if (!closestIcon) {
  //     return;
  //   }
  //   closestIcon.classList.add('selected');
  //   if (!selectedIcons.includes(closestIcon)) {
  //     selectedIcons.push(closestIcon);
  //   }
  // };

  // Selection area logic
  // let selectionStartX = 0;
  // let selectionStartY = 0;
  // const handleSelectionAreaDrag = (e) => {
  //   const selectionArea = document.querySelector('.selection-area');
  //   if (!selectionArea) {
  //     return;
  //   }

  //   const newPositionX = (e.clientX / window.innerWidth) * 100;
  //   const newPositionY = (e.clientY / window.innerHeight) * 100;

  //   let newWidth = newPositionX - selectionStartX;
  //   let newHeight = newPositionY - selectionStartX;

  //   if (newPositionX < selectionStartX) {
  //     selectionArea.style.left = `${newPositionX}%`;
  //     newWidth = Math.abs(newWidth);
  //   } else {
  //     selectionArea.style.left = `${selectionStartX}%`;
  //   }

  //   if (newPositionY < selectionStartY) {
  //     selectionArea.style.top = `${newPositionY}%`;
  //     newHeight = Math.abs(newHeight);
  //   } else {
  //     selectionArea.style.top = `${selectionStartY}%`;
  //   }

  //   selectionArea.style.width = `${newWidth}%`;
  //   selectionArea.style.height = `${newHeight}%`;
  // };
  // const handleSelectionAreaDragStart = (e) => {
  //   if (!e.target?.classList.contains('desktop-wrap')) {
  //     return;
  //   }

  //   const selectionArea = document.querySelector('.selection-area');
  //   if (!selectionArea) {
  //     return;
  //   }

  //   selectionStartX = (e.clientX / window.innerWidth) * 100;
  //   selectionStartY = (e.clientY / window.innerHeight) * 100;

  //   selectionArea?.classList.remove('hidden');
  //   selectionArea.style.top = `${selectionStartY}%`;
  //   selectionArea.style.left = `${selectionStartX}%`;

  //   document.querySelector('.desktop-wrap')
  // .addEventListener('mousemove', handleSelectionAreaDrag);
  // };
  // const handleSelectionAreaEnd = () => {
  //   const selectionArea = document.querySelector('.selection-area');
  //   if (!selectionArea) {
  //     return;
  //   }

  //   selectionArea?.classList.add('hidden');

  //   document.querySelector('.desktop-wrap')
  // .removeEventListener('mousemove', handleSelectionAreaDrag);
  // };

  return (
    <div
      className="desktop-wrap"
      style={{ backgroundImage: `url(${hours >= 17 || hours <= 6 ? './assets/images/desktop/mac-night.jpeg' : './assets/images/desktop/mac-day.jpeg'})` }}
      // onMouseDown={handleSelectionAreaDragStart}
      // onMouseUp={handleSelectionAreaEnd}
      onClick={selectIcon}
      key={uuidv4()}
    >
      <div className="toolkit">
        <p id="back-to-desktop-btn" onClick={closeCheckers}>
          <i className="fa-brands fa-apple" />
          <span className="app">Desktop</span>
        </p>
        <p className="os">MacOS - Catalina (0.75 Unstable)</p>
        <strong className="time">{getCurrentTime()}</strong>
      </div>

      <Draggable>
        <div
          className="desktop-icon-wrap vscode-icon"
          onDoubleClick={openVsCode}
          onTouchStart={openVsCode}
          // onTouchEnd={openVsCode}
          // draggable
          // onDragEnd={handleIconDrag}
          // onMouseEnter={multiSelect}
        >
          <img src="./assets/images/desktop/vs-code.png" alt="" className="desktop-icon" draggable={false} />
          <p className="icon-title">Open Portfolio</p>
        </div>
      </Draggable>

      <Draggable>
        <div
          className="desktop-icon-wrap checkers-icon"
          onDoubleClick={openCheckers}
          onTouchStart={openCheckers}
          // onTouchEnd={openVsCode}
          // draggable
          // onDragEnd={handleIconDrag}
          // onMouseEnter={multiSelect}
          key={uuidv4()}
        >
          <img src="./assets/images/desktop/checkers.png" alt="" className="desktop-icon" draggable={false} />
          <p className="icon-title">Checkers.io</p>
        </div>
      </Draggable>

      <iframe src="http://ec2-54-226-169-13.compute-1.amazonaws.com:3000/" frameBorder={0} title="Checkers.io" id="checkers-iframe" />

      {/* <Draggable>
        <div className="clock">
          <span className="hour" />
          <span className="minute" />
          <span className="second" />
          <span className="dot" />
        </div>

      </Draggable> */}
      {/* <div
        className="desktop-icon-wrap vscode-icon"
        onDoubleClick={openVsCode}
        onTouchEnd={openVsCode}
        draggable
        onDragEnd={handleIconDrag}
        onMouseEnter={multiSelect}
      >
        <img src="./assets/images/desktop/vs-code.png"
         alt="" className="desktop-icon" draggable={false} />
        <p className="icon-title">Open Portfolio</p>
      </div> */}

      <div className="selection-area hidden" />

    </div>
  );
}
