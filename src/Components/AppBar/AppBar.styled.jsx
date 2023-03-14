import styled from 'styled-components';

export const AppHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;

  margin-right: auto;
  margin-left: auto;
  padding: 15px;

  background-color: ${p => p.theme.color.primary};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    position: relative;
    width: ${p => p.theme.breakpoints.mobileM};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: ${p => p.theme.breakpoints.tablet};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    width: ${p => p.theme.breakpoints.desktop};
  }
`;

export const AppHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    justify-content: end;
  }
`;
