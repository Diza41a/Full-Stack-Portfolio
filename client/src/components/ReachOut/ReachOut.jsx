/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext, useEffect } from 'react';
import Typed from 'react-typed';

// Subcomponent/Data imports
import Colored from '../styles/Colored';
import questions from './questions';
import { MainContext } from '../reusable/MainLayout';

const { Subsection } = Colored.About;
const { ReachOutBody } = Colored;

export default function ReachOut() {
  const { setCurrentFileName } = useContext(MainContext);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [firstSubmit, setFirstSubmit] = useState(true);
  const [sessionId, generateSessionId] = useState(Math.round(Math.random() * 10000 + 1));

  // ComponentDidMount
  useEffect(() => {
    setCurrentFileName('ReachOut.jsx');
  }, []);

  // Helpers
  const activeLatestQuestion = () => {
    const activeQuestion = document.querySelector('.active-question');
    if (!activeQuestion) {
      return;
    }
    activeQuestion.focus();
  };
  const submitAnswer = (e) => {
    if (e.key === 'Enter') {
      const answer = e.target.value.trim();
      questions[questionIndex].answer = answer;
      if (questionIndex + 1 < questions.length) {
        setQuestionIndex(questionIndex + 1);
      } else {
        // eslint-disable-next-line no-restricted-syntax
        for (const question of questions) {
          question.answer = null;
        }
        setQuestionIndex(0);
        // Side effect fix
        document.querySelectorAll('input').forEach((input) => {
          // eslint-disable-next-line no-param-reassign
          input.value = '';
        });

        setFirstSubmit(false);
        generateSessionId(Math.round(Math.random() * 10000 + 1));
      }
    }
  };

  // Rendering
  const renderQuestions = () => (
    <>
      {questions.map((question, i) => {
        if (i < questionIndex && question.answer !== null) {
          return (
            <div className="question-wrap" key={i}>
              <span className="answered">{question.question}</span>
              <input className="answered" type="text" placeholder={question.answer} disabled />
            </div>
          );
        } if (i === questionIndex) {
          return (
            <div className="question-wrap" key={i}>
              <Typed
                strings={[`${question.question}`]}
                typeSpeed={20}
                startDelay={questionIndex === 0 && firstSubmit ? 3100 : 0}
                showCursor={false}
              />
              <input type="text" className="active-question" autoFocus onKeyDown={submitAnswer} />
            </div>
          );
        } if (i < questionIndex && question.answer === null) {
          setQuestionIndex(0);
        }
      })}
    </>
  );

  return (
    <Subsection className="tab">
      <p className="tab-title">Contact</p>
      <ReachOutBody className="tab-body reach-out-body-wrap">
        <h3 className="title">Reach Out</h3>

        <div className="console-device-wrap" onClick={activeLatestQuestion}>
          <img src="./assets/images/projects/smartphone-frame.png" draggable={false} alt="" className="smartphone" />
          <img src="./assets/images/projects/tablet-frame-rotated.png" draggable={false} alt="" className="tablet" />

          <div className="console">
            <div className="format-btns">
              <button type="button" id="email-format" className="format-btn active">
                <i className="fa-solid fa-envelope" />
              </button>
              <button type="button" id="phone-format" className="format-btn">
                <i className="fa-solid fa-phone" />
              </button>
            </div>

            <div className="questions">
              <p>
                $
                {`MacBook-Air: ~ session${sessionId}$ `}
                <Typed
                  strings={['node form.js']}
                  typeSpeed={40}
                  showCursor={false}
                />
              </p>
              <p>
                <Typed
                  strings={['Answer a series of question to submit your inquiry:']}
                  typeSpeed={20}
                  startDelay={1300}
                  showCursor={false}
                />
              </p>

              {renderQuestions()}
            </div>

          </div>
        </div>

      </ReachOutBody>
    </Subsection>
  );
}
