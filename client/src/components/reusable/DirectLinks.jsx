/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

// Subcomponent imports
import Colored from '../styles/Colored';

const { Card } = Colored;

export default function DirectLinks() {
  return (
    <Card className="card direct-links-card hidden">
      <div className="title-wrap">
        <i className="fa-solid fa-star star" />
        <h5 className="card-title">Direct Links</h5>
      </div>
      <div className="body card-body">
        <ul className="direct-links">
          <li>
            <a href="https://www.linkedin.com/in/davydzakorchennyi/" target="_blank" className="linkedin">
              <img src="./assets/images/icons/linkedin.png" alt="" />
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:DZakorchennyi@gmail.com" target="_blank" className="gmail">
              <img src="./assets/images/icons/gmail.png" alt="" />
              Gmail
            </a>
          </li>
          <li>
            <a href="https://t.me/Diza41a" target="_blank" className="telegram">
              <img src="./assets/images/icons/telegram.png" alt="" />
              Telegram
            </a>
          </li>
        </ul>
      </div>
    </Card>
  );
}
