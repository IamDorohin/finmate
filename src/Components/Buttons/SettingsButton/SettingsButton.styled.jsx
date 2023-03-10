import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  /* from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  } */
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
  color: #fff;
  padding: 0;
  margin: 0;

  &:hover,
  &:focus {
    color: #0cc9eb;
  }
  /* position: relative;
  width: 40px;
  height: 40px;
  border: 2px solid black;
  border-radius: 8px;
  background-color: #646666;
  color: #fff;
  padding: 0;
  margin: 0;

  &:hover,
  &:focus {
    color: #0cc9eb;
  } */
`;

export const SettingsButtonLogo = styled.div`
  position: absolute;

  background-color: transparent;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  color: #000;
  /* animation: ${rotate} 1s 1 linear; */

  /* animation: ${props =>
    props &&
    css`
      ${rotate} 3s infinite linear
    `}; */
  /* position: absolute;
  top: 8px;
  left: 7px;
  margin: 0;
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: none;
  animation: ${rotate} 1s 1 linear; */
`;
