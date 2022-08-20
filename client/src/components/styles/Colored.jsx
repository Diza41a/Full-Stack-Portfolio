import styled from 'styled-components';

const colors = {
  mainDark: '#181924',
  mainMedium: '#313244',
  mainText: '#D9D9D9',
  secondText: '#C8C2C2',
  border: '#626262',

  navHighlight: '#F8B172',
};

const Colored = {
  Toolbar: styled.header`
    background-color: ${colors.mainDark};
    color: ${colors.secondText};
    border-bottom: 1px solid ${colors.border};
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
};

export default Colored;
