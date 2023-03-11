import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
    from {
    transform: rotateY(-90deg);
  }
  to {
    transform: rotateY(0deg);
  }
`;

export const SettingsCardContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 180px;
  height: 180px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 15px;

  /* border: 3px solid #0cc9eb; */
  border: 1px solid #000;

  border-radius: 20px;
  font-weight: bold;
  background-color: #000;
  color: #fff;
  cursor: pointer;

  @media screen and (min-width: 480px) {
    /* position: relative; */
    height: 135px;
    width: 135px;
    margin: 0;
    padding: 12px;
    margin-top: 0;
    border: 1px solid #000;
  }

  @media screen and (min-width: 768px) {
    height: 160px;
    width: 160px;
    padding: 20px;
  }

  @media screen and (min-width: 1200px) {
    height: 200px;
    width: 200px;
    padding: 40px;
  }

  animation: ${props => {
    if (props.onClick) {
      return css`
        ${rotate} 0.7s 1 linear
      `;
    }
  }};
`;

export const UserProfileLogoContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 8px;
  right: 8px;
  height: 16px;
  width: 16px;
  color: #fff;
  cursor: pointer;

  @media screen and (min-width: 480px) {
    top: 8px;
    right: 8px;
    height: 20px;
    width: 20px;
  }

  @media screen and (min-width: 768px) {
    top: 8px;
    right: 8px;
    height: 24px;
    width: 24px;
  }

  @media screen and (min-width: 1200px) {
    top: 12px;
    right: 12px;
    height: 32px;
    width: 32px;
  }
`;

export const SettingsCardContent = styled.div`
  @media screen and (min-width: 1200px) {
    font-size: 24px;
  }

  opacity: ${props => {
    switch (props.animation) {
      case 'false':
        return '1';
      case 'true':
        return '0';
      default:
        return;
    }
  }};
`;
