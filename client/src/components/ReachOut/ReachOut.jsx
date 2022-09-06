/* eslint-disable prefer-regex-literals */
/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext, useEffect } from 'react';
import Typed from 'react-typed';
import validate from 'validate.js';
import axios from 'axios';

// Subcomponent/Data imports
import questions from './questions';
import { MainContext } from '../reusable/MainLayout';

export default function ReachOut() {
  const { setCurrentFileName } = useContext(MainContext);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [firstSubmit, setFirstSubmit] = useState(true);
  const [sessionId, generateSessionId] = useState(Math.round(Math.random() * 10000 + 1));
  const constraints = {
    from: {
      email: true,
    },
  };

  // ComponentDidMount
  useEffect(() => {
    document.querySelector('.direct-links-card')?.classList.add('persisting');
    setCurrentFileName('ReachOut.jsx');

    return function cleanup() {
      document.querySelector('.direct-links-card')?.classList.remove('persisting');
    };
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
    // bookmark ▋
    if (e.key === 'Enter') {
      e.preventDefault();
      let answer = e.target.value.trim();
      // Answer validation
      const { fieldType } = questions[questionIndex];
      if (fieldType === 'name') {
        const answerArr = answer.split(' ');
        let invalid = false;
        if (answerArr.length === 0 || answerArr.length > 4) {
          invalid = true;
        }
        if (!invalid) {
          for (const subName of answerArr) {
            if (!subName.match(/^[a-zA-Z]+$/) || subName.length < 1) {
              invalid = true;
              break;
            }
          }
        }
        if (invalid) {
          e.target.placeholder = questions[questionIndex].error;
          e.target.value = '';
          console.log('here', e.target.placeholder);
          return;
        }
        answer = answerArr.map((subName) => subName.charAt(0).toUpperCase() + subName.slice(1)).join(' ');
      } else if (fieldType === 'email') {
        if (validate({ from: answer }, constraints) || !answer.length) {
          e.target.placeholder = questions[questionIndex].error;
          e.target.value = '';
          return;
        }
      } else if (fieldType === 'phone') {
        // eslint-disable-next-line no-useless-escape
        if ((!answer.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im) || answer.length < 9)
        && answer.length > 0) {
          e.target.placeholder = questions[questionIndex].error;
          e.target.value = '';
          return;
        }
        if (answer.length === 0) {
          answer = '__Left blank__';
        }
      } else if (fieldType === 'message') {
        if (answer.length < 20) {
          e.target.placeholder = questions[questionIndex].error;
          e.target.value = '';
          return;
        }
      } else if (fieldType === 'submit' || fieldType === 'restart') {
        const options = ['yes', 'no', 'y', 'n'];
        let valid = false;
        answer = answer.toLowerCase();
        for (const option of options) {
          if (answer === option) {
            valid = true;
            break;
          }
        }
        if (!valid) {
          e.target.placeholder = questions[questionIndex].error;
          e.target.value = '';
          return;
        } if (fieldType === 'submit') {
          const answers = {};
          for (const question of questions) {
            answers[question.fieldType] = question.answer;
          }
          axios.post('message', answers)
            .catch(() => {
              e.target.placeholder = 'Error submitting question, try again please...';
              e.target.value = '';
            });
          if (answer === 'n' || answer === 'no') {
            for (const question of questions) {
              question.answer = null;
              setQuestionIndex(0);
              setFirstSubmit(false);
            }
            return;
          }
        }
        if (fieldType === 'restart') {
          if (answer === 'n' || answer === 'no') {
            questions[questionIndex].answer = answer;
            const questionEl = document.querySelector('.active-question');
            questionEl.disabled = true;
            questionEl.value = '';
            questionEl.rows = 1;
            questionEl.placeholder = 'Message submitted. Good day!';
            return;
          }
        }
      }

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

              <div className="active-question-wrap">
                <span className="blinking-caret">{'>'}</span>
                <textarea type="text" rows="10" spellCheck={false} className="active-question" autoFocus autoComplete="off" onKeyDown={submitAnswer} />
              </div>
            </div>
          );
        } if (i < questionIndex && question.answer === null) {
          setQuestionIndex(0);
        }
      })}
    </>
  );

  return (
    <section className="tab">
      <p className="tab-title">Contact</p>
      <div className="tab-body reach-out-body-wrap">
        <h3 className="title">Reach Out</h3>

        <div className="console-device-wrap" onClick={activeLatestQuestion}>
          <img src="./assets/images/projects/smartphone-frame.png" draggable={false} alt="" className="smartphone" />
          <img src="./assets/images/projects/tablet-frame-rotated.png" draggable={false} alt="" className="tablet" />

          <div className="console">
            <div className="format-btns">
              <button type="button" id="email-format" className="format-btn active">
                {/* <i className="fa-solid fa-envelope" /> */}
                <span className="material-symbols-outlined">
                  mail
                </span>
              </button>
              <button type="button" id="phone-format" className="format-btn">
                {/* <i className="fa-solid fa-phone" /> */}
                <span className="material-symbols-outlined disabled">
                  phone
                </span>
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

      </div>
    </section>
  );
}
