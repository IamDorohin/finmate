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
  padding: 15px;
  /* border: 3px solid #000; */
  border: 1px solid #000;
  background-color: #000;

  border-radius: 10px;
  cursor: pointer;

  @media screen and (min-width: 480px) {
    /* position: relative; */
    height: 135px;
    width: 135px;
    margin: 0;
    padding: 12px;
    margin-top: 0;
    border: 1px solid #000;
    background-color: #000;
  }

  @media screen and (min-width: 768px) {
    height: 160px;
    width: 160px;
    padding: 20px;
  }

  @media screen and (min-width: 1200px) {
    height: 180px;
    width: 180px;
    /* height: 200px;
    width: 200px;
    padding: 40px; */
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
  width: 120px;
  height: 120px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #000;
  border-radius: 50%;
  /* background-color: #0cc9eb; */
  background-color: #fff;

  @media screen and (min-width: 480px) {
    width: 100px;
    height: 100px;
    background-color: #fff;
  }

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media screen and (min-width: 1200px) {
    /* height: 150px;
    width: 150px; */
  }
`;

export const UserProfileNickname = styled.p`
  margin: 0;
  margin-top: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  color: #fff;

  @media screen and (min-width: 480px) {
    margin-top: 10px;
    padding: 0;
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 16px;
    font-size: 20px;
  }

  @media screen and (min-width: 1200px) {
    /* margin-top: 24px;
    font-size: 24px; */
  }
`;

export const SettingsLogoContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 8px;
  right: 8px;
  height: 16px;
  width: 16px;
  /* border: 1px solid #fff; */
  color: #fff;
  cursor: pointer;

  /* :hover,
  :focus {
    animation: ${rotate} 3s infinite linear;
  } */

  @media screen and (min-width: 480px) {
    top: 8px;
    right: 8px;
    height: 20px;
    width: 20px;
  }

  @media screen and (min-width: 768px) {
    height: 24px;
    width: 24px;
  }

  @media screen and (min-width: 1200px) {
    /* top: 12px;
    right: 12px;
    height: 32px;
    width: 32px; */
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
