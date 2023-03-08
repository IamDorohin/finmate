import styled from 'styled-components';

export const ThemeSwitcherContainer = styled.div`
  position: relative;
  display: flex;
  border: 1px solid black;
  border-radius: 8px;
  width: 82px;
  height: 40px;
  background-color: #000;
`;

export const ThemeSwitcherStars = styled.div`
  position: absolute;
  top: 10px;
  left: 50px;
  color: #fff;
  width: 20px;
  height: 20px;

  transition-property: left;
  transition-duration: 0.5s;

  left: ${props => {
    switch (props.theme) {
      case 'light':
        return '8px';
      default:
        return '50px';
    }
  }};
`;

export const ThemeSwitcherButton = styled.button`
  position: absolute;
  top: 1px;
  left: 41.5px;
  padding: 0;
  width: 40px;
  height: 38px;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: #646666;

  transition-property: left;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  transition-timing-function: ${props => {
    switch (props.theme) {
      case 'dark':
        return 'cubic-bezier(0.4, 0, 0.2, 1);';
      default:
        return 'cubic-bezier(.8,0,.6,1)';
    }
  }};

  left: ${props => {
    switch (props.theme) {
      case 'dark':
        return '0.5px';
      default:
        return '41.5px';
    }
  }};
`;
