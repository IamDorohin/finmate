import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppLogoContainer = styled.div`
  padding-left: 0;
`;

export const AppLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const AppLogoIconContainer = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 50%;
  background-color: black;
  color: white;
  height: 30px;
  width: 30px;

  @media screen and (min-width: 480px) {
    height: 40px;
    width: 40px;
  }

  @media screen and (min-width: 768px) {
    height: 50px;
    width: 50px;
  }

  @media screen and (min-width: 1200px) {
    height: 60px;
    width: 60px;
  }
  &:hover,
  :focus {
    /* color: #0cc9eb; */
  }
`;

export const AppLogoPrimaryEl = styled.div`
  padding-left: 10px;
  font-weight: bold;
  font-size: 20px;
  color: black;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 30px;
  }
`;

export const AppLogoSecondaryEl = styled.div`
  padding-left: 5px;
  font-weight: bold;
  font-size: 20px;
  color: black;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 30px;
  }
`;
