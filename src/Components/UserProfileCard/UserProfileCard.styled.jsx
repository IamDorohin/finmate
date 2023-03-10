import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const UserProfileCardContainer = styled.div`
  width: 180px;
  height: 180px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 15px;
  border: 3px solid #000;
  border-radius: 20px;

  @media screen and (min-width: 480px) {
    position: relative;
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
`;

export const UserProfileAvatar = styled.div`
  width: 120px;
  height: 120px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #000;
  border-radius: 50%;
  background-color: #0cc9eb;

  @media screen and (min-width: 480px) {
    width: 100px;
    height: 100px;
    background-color: #fff;
  }

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const UserProfileNickname = styled.p`
  margin: 0;
  margin-top: 30px;
  text-align: center;
  font-weight: bold;

  @media screen and (min-width: 480px) {
    margin-top: 10px;
    padding: 0;
    color: #fff;
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

  :hover,
  :focus {
    animation: ${rotate} 3s infinite linear;
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
