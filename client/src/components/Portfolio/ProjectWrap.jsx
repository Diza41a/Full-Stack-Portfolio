/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-cycle */
import React, { useContext, useState } from 'react';

// Carousel imports (https://openbase.com/js/react-responsive-carousel/documentation)
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Subcomponent/Data imports
import { ProjectContext } from './PortfolioManager';
import { projects } from './projects';

export default function ProjectWrap() {
  const [carouselMode, setCarouselMode] = useState('mobile');
  const { currentProject, setProject } = useContext(ProjectContext);

  // Helpers
  const expandCard = () => {
    const infoCard = document.querySelector('p.card-body');
    if (!infoCard) {
      return;
    }
    if (infoCard?.classList.contains('shrinked')
    && currentProject.description.length > 350) {
      infoCard.classList.remove('shrinked');
      infoCard.innerText = currentProject.description;
    } else if (!infoCard?.classList.contains('shrinked')
    && currentProject.description.length > 350) {
      infoCard.classList.add('shrinked');
      infoCard.innerText = `${currentProject.description.slice(0, 347)}...`;
    }
  };
  const getProjectIndex = (title) => projects.findIndex((project) => (
    project.title === title
  ));
  const nextProject = (e) => {
    e.preventDefault();
    const currentProjectIndex = getProjectIndex(currentProject.title);
    if (currentProjectIndex < projects.length - 1) {
      setProject(projects[currentProjectIndex + 1]);
    }
  };
  const prevProject = (e) => {
    e.preventDefault();
    const currentProjectIndex = getProjectIndex(currentProject.title);
    if (currentProjectIndex > 0) {
      setProject(projects[currentProjectIndex - 1]);
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
          <section className="mobile">
            <Carousel
              autoPlay={false}
              emulateTouch
            >
              {currentProject.images.main.map((screenshotUrl, i) => (
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
              <div className="tablet-wrap">
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

              <div className="laptop-wrap">
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
            <p className="body card-body shrinked" onClick={expandCard}>
              {(() => {
                if (currentProject.description.length > 350) {
                  return `${currentProject.description.slice(0, 347)}...`;
                }
                return currentProject.description;
              })()}
            </p>
          </div>
          <div className="card">
            <div className="title-wrap">
              <i className="fa-solid fa-star star" />
              <h5 className="card-title">Links</h5>
            </div>
            <div className="links-wrap">
              <a href={currentProject['github-link']} rel="noreferrer" target="_blank" className="octo-logo">
                <img src="./assets/images/about-skills/github.png" alt="" />
              </a>

              <div className="links">
                <a href={currentProject['deployed-link']} rel="noreferrer" target="_blank" className="disabled">View Code</a>
                <a href={currentProject['deployed-link']} rel="noreferrer" target="_blank">View Deployed</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
