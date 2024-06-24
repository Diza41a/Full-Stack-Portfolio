/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-cycle */
import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Carousel imports (https://openbase.com/js/react-responsive-carousel/documentation)
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ProjectLinks from './ProjectLinks';

// Subcomponent/Data imports
import { ProjectContext } from './PortfolioManager';
import { projects } from './projects';

export default function ProjectWrap() {
  const [carouselMode, setCarouselMode] = useState('large');
  const { currentProject, setProject } = useContext(ProjectContext);

  const animatedElClasses = ['laptop-wrap', 'tablet-wrap', 'card-body-project'];
  const singleAnimationElClasses = ['card-body-project-desc'];
  // Helpers
  const getProjectIndex = (title) => projects.findIndex((project) => (
    project.title === title
  ));
  const nextProject = (e) => {
    e.preventDefault();
    const currentProjectIndex = getProjectIndex(currentProject.title);
    if (currentProjectIndex < projects.length - 1) {
      // Animate transitions
      for (const className of animatedElClasses) {
        document.querySelector(`.${className}`)?.classList.add('leaving-right');
      }
      for (const className of singleAnimationElClasses) {
        document.querySelector(`.${className}`)?.classList.add('leaving');
      }
      document.querySelector('section.mobile')?.classList.add('leaving');
      setTimeout((() => {
        setProject(projects[currentProjectIndex + 1]);
      }), 500);
    }
  };
  const prevProject = (e) => {
    e.preventDefault();
    const currentProjectIndex = getProjectIndex(currentProject.title);
    if (currentProjectIndex > 0) {
      for (const className of animatedElClasses) {
        document.querySelector(`.${className}`)?.classList.add('leaving-left');
      }
      for (const className of singleAnimationElClasses) {
        document.querySelector(`.${className}`)?.classList.add('leaving');
      }
      console.log(document.querySelector('section.mobile'));
      document.querySelector('section.mobile')?.classList.add('leaving');
      setTimeout((() => {
        setProject(projects[currentProjectIndex - 1]);
      }), 500);
    }
  };
  const hideLargeCarousel = (e) => {
    const largeCarousel = document.querySelector('.carousel-wrap');
    if (!largeCarousel
      || e.target.closest('.carousel-root')) {
      return;
    }

    largeCarousel.classList.remove('displayed');
  };

  return (
    <section className="tab">
      <p className="tab-title">Portfolio</p>
      <div className="project-wrap tab-body">
        <div className="project-nav-mobile">
          <img
            src="./assets/images/arrow-white.svg"
            alt=""
            className={getProjectIndex(currentProject.title) > 0 ? 'project-prev-btn' : 'project-prev-btn hidden'}
            onClick={prevProject}
          />
          <img
            src="./assets/images/arrow-white.svg"
            alt=""
            className={getProjectIndex(currentProject.title) < projects.length - 1 ? 'project-next-btn' : 'project-next-btn hidden'}
            onClick={nextProject}
          />
        </div>
        <h3 className="project-title">{currentProject.title}</h3>
        <div className="gallery">
          <section className="mobile" key={uuidv4()}>
            <Carousel
              autoPlay={false}
              emulateTouch
            >
              {currentProject.images.mobile.map((screenshotUrl, i) => (
                <div key={i}>
                  <img src={screenshotUrl} key={i} />
                </div>
              ))}
            </Carousel>
          </section>
          <section className="large">

            <img
              src="./assets/images/arrow-white.svg"
              alt=""
              className={getProjectIndex(currentProject.title) > 0 ? 'project-prev-btn' : 'project-prev-btn hidden'}
              onClick={prevProject}
            />

            <div className="device-views">
              <div className="tablet-wrap" key={uuidv4()}>
                <img src="./assets/images/projects/tablet-frame.png" alt="" className="tablet-img" />
                <div
                  className="tablet-content"
                  onClick={() => {
                    if (carouselMode !== 'mobile') {
                      setCarouselMode('mobile');
                    }
                    document.querySelector('.carousel-wrap').classList.add('displayed');
                  }}
                >
                  <img src={currentProject.images.mobile[0]} alt="" className="tablet-screenshot" />
                  <div className="tablet-screenshot-desc">
                    <span>Click...</span>
                  </div>
                </div>
              </div>

              <div className="laptop-wrap" key={uuidv4()}>
                <img src="./assets/images/projects/laptop-frame.png" alt="" className="laptop-img" />
                <div
                  className="laptop-content"
                  onClick={() => {
                    if (carouselMode !== 'large') {
                      setCarouselMode('large');
                    }
                    document.querySelector('.carousel-wrap').classList.add('displayed');
                  }}
                >
                  <img src={currentProject.images.main[0]} alt="" />
                  <div className="laptop-screenshot-desc">
                    <span>Click to view screenshots...</span>
                  </div>
                </div>
              </div>
            </div>

            <img
              src="./assets/images/arrow-white.svg"
              alt=""
              className={getProjectIndex(currentProject.title) < projects.length - 1 ? 'project-next-btn' : 'project-next-btn hidden'}
              onClick={nextProject}
            />

          </section>
          <div className="carousel-wrap" onClick={hideLargeCarousel}>
            <button id="carousel-close" type="button" onClick={hideLargeCarousel}>X</button>
            <Carousel
              key={uuidv4()}
              autoPlay={false}
              emulateTouch
              thumbWidth={200}
            >
              {(() => {
                let imagesArr;
                if (carouselMode === 'mobile') {
                  imagesArr = [...currentProject.images.mobile];
                } else {
                  imagesArr = [...currentProject.images.main];
                }

                return imagesArr.map((screenshotUrl, i) => (
                  <div key={i}>
                    <img src={screenshotUrl} key={i} />
                  </div>
                ));
              })()}
            </Carousel>
          </div>
        </div>
        <div className="info-cards">
          {/*  */}
          <div className="card">
            <div className="title-wrap">
              <i className="fa-solid fa-star star" />
              <h5 className="card-title">App Overview</h5>
            </div>
            <p className="body card-body card-body-project-desc" key={uuidv4()}>
              {currentProject.description.split('\n').map((line, i) => {
                console.log('line: ', line);

                return (
                  <p key={i}>{line}</p>
                );
              })}
            </p>
          </div>
          <div className="card">
            <div className="title-wrap">
              <i className="fa-solid fa-star star" />
              <h5 className="card-title">Links</h5>
            </div>
            <div className="links-wrap">
              <div className="links">
                <ProjectLinks project={currentProject} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
