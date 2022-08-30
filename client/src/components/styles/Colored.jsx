import styled from 'styled-components';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';

export const colors = {
  mainDark: '#181924',
  mainDarkTransparent: 'rgba(24, 25, 36, 0.9)',
  mainMedium: '#313244',
  mainText: '#D9D9D9',
  secondText: '#C8C2C2',
  border: '#626262',

  tab: 'rgba(52, 47, 48, 0.8)',
  subsectionSelector: '#575764',
  navHighlight: '#F8B172',
  gutterBackground: '#0D1116',
  gutterForeground: '#6B727D',
  resumeButton: '#188AEB',
  projectListItem: '#53B0FF',
};

export const background = {
  image: 'url("assets/images/background-curves.png")',
  color: '#181924',
};

export const codeMirrorTxtTheme = createTheme({
  theme: 'light',
  settings: {
    background: 'transparent',
    foreground: `${colors.mainText}`,
    caret: '#5d00ff',
    selection: `${colors.mainMedium}`,
    selectionMatch: `${colors.mainMedium}`,
    lineHighlight: `${colors.mainMedium}`,
    gutterBackground: `${colors.gutterBackground}`,
    gutterForeground: `${colors.gutterForeground}`,
  },
  styles: [
    { tag: t.comment, color: '#787b8099' },
    { tag: t.variableName, color: `${colors.mainText}` },
    { tag: [t.string, t.special(t.brace)], color: `${colors.mainText}` },
    { tag: t.number, color: `${colors.mainText}` },
    { tag: t.bool, color: `${colors.mainText}` },
    { tag: t.null, color: `${colors.mainText}` },
    { tag: t.keyword, color: `${colors.mainText}` },
    { tag: t.operator, color: `${colors.mainText}` },
    { tag: t.className, color: `${colors.mainText}` },
    { tag: t.definition(t.typeName), color: `${colors.mainText}` },
    { tag: t.typeName, color: `${colors.mainText}` },
    { tag: t.angleBracket, color: `${colors.mainText}` },
    { tag: t.tagName, color: `${colors.mainText}` },
    { tag: t.attributeName, color: `${colors.mainText}` },
  ],
});

const Colored = {
  Toolbar: styled.header`
    background-color: ${colors.mainDark};
    color: ${colors.secondText};
    border-bottom: 1px solid ${colors.border};
    font-family: 'Code-Bold',
  `,
  Nav: styled.nav`
    background-color: ${colors.mainMedium};
    color: ${colors.mainText};
    border-right: 1px solid ${colors.border};

    a {
      &.active {
        border-left: 4px solid ${colors.navHighlight};
      }
    }
  `,
  LandingWrap: styled.div`
    .landing-nav-lbl {
      color: ${colors.mainText};
      background-color: ${colors.subsectionSelector};
    }

    .introduction {
      background-color: ${colors.mainDarkTransparent};
      border: 4px solid ${colors.border};

      .static, .dynamic {
        color: ${colors.mainText};
      }
    }
  `,
  About: {
    SubsectionSelector: styled.div`
      background-color: ${colors.mainDarkTransparent};
      color: ${colors.mainText};
      border-right: 1px solid ${colors.border};

      .about-section-selector-list {
        a {
          text-decoration: none;
          .title {
            color: ${colors.mainText};
          }
          .description {
            color: ${colors.secondText};
          }
          &.active {
            background-color: ${colors.subsectionSelector};
          }
        }
      }

      .selector-toggle {
          background-color: ${colors.mainDark};
      }
    `,
    Subsection: styled.section`
      .tab-title {
        color: ${colors.secondText};
        background-color: ${colors.tab};
        border-top: 3px solid ${colors.navHighlight};
      }

      .about-subsection-body, .tab-body {
        background-color: ${colors.tab};

        .about-paragraph {
          color: ${colors.mainText}
        }

        .description {
          #resume-btn {
            color: white;
            background-color: ${colors.resumeButton};
          }
        }
      }
    `,
    SkillSection: styled.section`
      .title-wrap {
        .title {
          color: ${colors.mainText};
        }
      }

      .skills-body {
        .skill-wrap {
          .skill-title-wrap {
            .skill-title {
              color: ${colors.mainText};
            }
          }
          .subskill-list {
            li {
              color: ${colors.secondText};
            }
          }
        }
      }
    `,
  },
  Portfolio: {
    Selector: styled.div`
       background-color: ${colors.mainDark};
       border-right: 1px solid ${colors.border};
       color: ${colors.secondText};

       .title {
         color: #FFFFFF;
       }

       ul {
         li {
           color: ${colors.projectListItem};
           cursor: pointer;

           &.selected {
            background-color: ${colors.border};
           }
         }

         &.disabled {
           li {
             color: ${colors.secondText};
             cursor: not-allowed;
           }
         }
       }
    `,
    Wrap: styled.div`
       .project-nav-mobile {
         /* background-color: ${colors.mainDark}; */
         border-top: 1px solid ${colors.border};
         border-bottom: 1px solid ${colors.border};
       }

       .project-title {
         color: ${colors.mainText};
       }

       .info-cards {

         .card {
            background-color: rgb(12, 12, 12);

           .star {
             color: #FFFFFF;
             background-color: ${colors.resumeButton};
           }
           .card-title {
            color: ${colors.mainText};
           }
           .body {
             color: ${colors.mainText};
           }
           .links-wrap {
             .links {
               a {
                 color: ${colors.mainText};
                 background-color: ${colors.resumeButton};

                 &.disabled {
                   background-color: gray;
                 }
               }
             }
           }
         }
       }
    `,
  },
  ReachOutBody: styled.div`
    .title {
      color: ${colors.secondText};
    }
  `,
};

export default Colored;
