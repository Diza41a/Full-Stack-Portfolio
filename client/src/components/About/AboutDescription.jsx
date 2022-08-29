import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { EditorView } from '@codemirror/view';
import axios from 'axios';

// Subcomponent imports
import Colored, { codeMirrorTxtTheme } from '../styles/Colored';

const { Subsection } = Colored.About;

export default function AboutDescription() {
  const [aboutText, setAboutText] = useState('');

  // ComponentDidMount
  useEffect(() => {
    axios.get('/test')
      .then(({ data }) => setAboutText(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Subsection className="about-subsection introduction tab-wrap">
      <p className="tab-title">About me.txt</p>
      <div className="about-subsection-body introduction tab-body">
        <div className="description">
          <CodeMirror
            className="code-editor"
            value={aboutText}
            height="auto"
            readOnly
            theme={codeMirrorTxtTheme}
            extensions={[javascript({ jsx: true }), EditorView.lineWrapping]}
          />
          <a href="./assets/resume.docx" download="Davyd Zakorchennyi Resume" id="resume-btn">Download Resume</a>
        </div>
        <div className="about-me-pics">
          <img src="./assets/images/about-me/about-me-1.jpeg" alt="" />
          <img src="./assets/images/about-me/about-me-2.jpeg" alt="" />
        </div>
      </div>
    </Subsection>
  );
}
