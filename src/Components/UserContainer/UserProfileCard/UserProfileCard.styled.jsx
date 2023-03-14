import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
    from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
`;

export const UserProfileCardContainer = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 12px;
  border: 1px solid #000;
  background-color: #000;

  border-radius: 20px;
  cursor: pointer;

  @media screen and (min-width: 480px) {
    height: 130px;
    width: 130px;
    margin: 0;
    padding: 12px;
    margin-top: 0;
    border: 1px solid #000;
    background-color: #000;
  }

  @media screen and (min-width: 768px) {
    height: 180px;
    width: 180px;
    padding: 20px;
  }

  @media screen and (min-width: 1200px) {
    height: 200px;
    width: 200px;
  }

  animation: ${props => {
    if (props.onClick) {
      return css`
        ${rotate} 0.7s 1 linear
      `;
    }
  }};
`;

export const UserProfileAvatar = styled.div`
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #000;
  border-radius: 50%;
  /* background-color: #0cc9eb; */
  background-color: #fff;

  @media screen and (min-width: 480px) {
    width: 70px;
    height: 70px;
    background-color: #fff;
  }

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media screen and (min-width: 1200px) {
    height: 120px;
    width: 120px;
  }
`;

export const UserProfileNickname = styled.p`
  margin: 0;
  margin-top: 24px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  color: #fff;

  @media screen and (min-width: 480px) {
    margin-top: 10px;
    padding: 0;
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 16px;
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    /* margin-top: 24px;
    font-size: 24px; */
  }
`;

export const SettingsLogoContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  width: 16px;
  color: #fff;
  cursor: pointer;

  @media screen and (min-width: 480px) {
    top: 6px;
    right: 6px;
  }

  @media screen and (min-width: 768px) {
    height: 24px;
    width: 24px;
  }

  @media screen and (min-width: 1200px) {
    top: 12px;
    right: 12px;
  }
`;

export const CardsContainer = styled.div`
  width: 180px;
  height: 180px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 15px;
  border: 2px solid #000;
  border-radius: 20px;
`;

// @media screen and (min-width: 480px) {
// }
