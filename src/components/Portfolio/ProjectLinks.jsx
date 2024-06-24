/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function ProjectLinks(props) {
  const { project } = props || { project: { links: {} } };

  const codeLinksDict = {
    frontend: 'Frontend Code',
    backend: 'Backend Code',
    code: 'View Code',
    website: 'View Site',
  };
  console.log(Object.entries(project.links));

  return (
    <div className="card">
      <div className="title-wrap">
        <i className="fa-solid fa-star star" />
        <h5 className="card-title">Links</h5>
      </div>
      <div className="links-wrap">
        <div className="links">
          <div className="links-wrap">
            <div className="links">
              {Object.entries(project.links).map(([linkName, link]) => (
                <a
                  href={link}
                  rel="noreferrer"
                  target="_blank"
                  onClick={((e) => e.preventDefault())}
                >
                  {codeLinksDict[linkName]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
