import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
    from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SettingsButtonContainer = styled.button`
  position: relative;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  background-color: transparent;
  color: #000;
  padding: 0;
  margin: 0;

  &:hover,
  &:focus {
    animation: ${props =>
      props &&
      css`
        ${rotate} 3s infinite linear
      `};
    color: #0cc9eb;
  }
`;
