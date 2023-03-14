import styled from 'styled-components';

export const ThemeSwitcherContainer = styled.div`
  position: absolute;
  top: 66px;
  right: 20px;
  display: flex;
  border: 1px solid black;
  border-radius: 24px;
  width: 20px;
  height: 42px;
  background-color: #000;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    position: relative;
    top: 0;
    right: 0;
    margin-left: 16px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    margin-left: 24px;
  }
`;

export const ThemeSwitcherStars = styled.div`
  position: absolute;
  left: 2px;
  color: #fff;
  width: 15px;
  height: 15px;
  transform: translateX(2px);

  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  transition-timing-function: ${props => {
    switch (props.theme) {
      case 'dark':
        return 'cubic-bezier(0.4, 0, 0.2, 1);';
      default:
        return 'cubic-bezier(.8,0,.6,1)';
    }
  }};

  transform: ${props => {
    switch (props.theme) {
      case 'dark':
        return 'translateY(2px)';
      default:
        return 'translateY(23px)';
    }
  }};
`;

export const ThemeSwitcherButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  width: 18px;
  height: 18px;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: #646666;
  transform: translateY(0px);

  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  transition-timing-function: ${props => {
    switch (props.theme) {
      case 'dark':
        return 'cubic-bezier(0.4, 0, 0.2, 1);';
      default:
        return 'cubic-bezier(.8,0,.6,1)';
    }
  }};

  transform: ${props => {
    switch (props.theme) {
      case 'dark':
        return 'translateY(22px)';
      default:
        return 'translateY(0px)';
    }
  }};
`;

export const ThemeSwitcherSunButton = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  height: 7px;
  width: 7px;
`;

export const ThemeSwitcherMoonButton = styled.div`
  position: absolute;
  top: 1px;
  left: 2px;
  height: 8px;
  width: 8px;
`;
