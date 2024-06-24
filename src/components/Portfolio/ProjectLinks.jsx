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
    <>
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
    </>
  );
}
