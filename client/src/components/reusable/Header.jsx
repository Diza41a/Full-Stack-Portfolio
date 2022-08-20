/* eslint-disable import/extensions */
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// Component imports
import Colored from '../styles/Colored';

const { Toolbar, Nav } = Colored;

export default function Header() {
  return (
    <>
      <Toolbar>
        <div className="buttons">
          <button type="button" style={{ color: 'white', backgroundColor: 'red' }}>
            <i className="fa-solid fa-x" />
          </button>
          <button type="button" style={{ color: 'black', backgroundColor: '#FFDE59' }}>
            <i className="fa-solid fa-compress" />
          </button>
          <button type="button" style={{ color: 'white', backgroundColor: '#7ED957' }}>
            <i className="fa-solid fa-minus" />
          </button>
        </div>

        <p className="file-name">Landing.jsx - Davyd Zakorchennyi</p>

        <strong className="time">Fri Aug 19 12:16 PM</strong>
      </Toolbar>

      <Nav>
        <div className="main-nav">
          <NavLink to="/">
            <i className="fa-solid fa-flag-checkered" style={{ transform: 'rotate(20deg)' }} />
          </NavLink>
          <NavLink to="/">
            <i className="fa-solid fa-circle-info" />
          </NavLink>
          <NavLink to="/">
            <i className="fa-solid fa-briefcase" />
          </NavLink>
          <NavLink to="/">
            <i className="fa-solid fa-phone" />
          </NavLink>
        </div>
        <div className="second-nav">
          <i className="fa-solid fa-user" />
          <i className="fa-solid fa-gear" />
        </div>
      </Nav>
      <Outlet />
    </>
  );
}
