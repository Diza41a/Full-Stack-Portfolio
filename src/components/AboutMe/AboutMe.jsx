import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { EditorView } from '@codemirror/view';
import bio from './bio';

// Subcomponent imports
import { codeMirrorTxtTheme } from '../styles/Colored';

export default function AboutMe() {
  return (
    <section className="vs-code-tab-section introduction tab-wrap">
      <p className="tab-title">About me.txt</p>
      <div className="vs-code-tab-section-body introduction tab-body">
        <div className="description">
          <CodeMirror
            className="code-editor"
            value={bio}
            height="auto"
            readOnly
            theme={codeMirrorTxtTheme}
            extensions={[javascript({ jsx: true }), EditorView.lineWrapping]}
          />
          <a href="./assets/resume.pdf" download="Resume - Davyd Zakorchennyi" id="resume-btn">Download Resume</a>
        </div>
        <div className="about-me-pics">
          <img src="./assets/images/about-me/about-me-1.jpeg" alt="" />
          <img src="./assets/images/about-me/about-me-2.jpeg" alt="" />
        </div>
      </div>
    </section>
  );
}
