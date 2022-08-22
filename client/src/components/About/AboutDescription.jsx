import React from 'react';

// Subcomponent imports
import Colored from '../styles/Colored';

const { Subsection } = Colored.About;

export default function AboutDescription() {
  return (
    <Subsection className="about-subsection introduction">
      <p className="tab-title">About me.txt</p>
      <div className="about-subsection-body">
        <p className="about-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Omnis pariatur praesentium laboriosam, a eum neque possimus
          incidunt doloribus quaerat blanditiis facere inventore facilis
          ea similique et nobis quisquam doloremque beatae.
        </p>

        <p className="about-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Omnis pariatur praesentium laboriosam, a eum neque possimus
          incidunt doloribus quaerat blanditiis facere inventore facilis
          ea similique et nobis quisquam doloremque beatae.
        </p>
      </div>
    </Subsection>
  );
}
