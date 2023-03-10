import styled from 'styled-components';

export const SettingsCardContainer = styled.div`
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
  border: 3px solid #0cc9eb;
  border-radius: 20px;
  font-weight: bold;
  background-color: #000;
  color: #fff;

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
  /* border: 1px solid #fff; */
  color: #fff;
`;

export const SettingsCardContent = styled.div``;
