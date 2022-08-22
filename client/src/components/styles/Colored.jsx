import styled from 'styled-components';

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
};

export const background = {
  image: 'url("assets/images/background-curves.png")',
  color: '#181924',
};

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

      .about-subsection-body {
        background-color: ${colors.tab};

        .about-paragraph {
          color: ${colors.mainText}
        }
      }
    `,
  },
};

export default Colored;
