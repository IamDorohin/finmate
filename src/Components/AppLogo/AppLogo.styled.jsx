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
  padding: 4px;
  border-radius: 50%;
  background-color: black;
  color: white;
  height: 30px;
  width: 30px;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    height: 40px;
    width: 40px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    height: 50px;
    width: 50px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    height: 60px;
    width: 60px;
  }
`;

export const AppLogoPrimaryEl = styled.div`
  padding-left: 8px;
  font-weight: bold;
  font-size: ${p => p.theme.fontSizes.l}px;
  color: black;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.xl}px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    font-size: ${p => p.theme.fontSizes.xxl}px;
  }
`;

export const AppLogoSecondaryEl = styled.div`
  padding-left: 5px;
  font-weight: bold;
  font-size: ${p => p.theme.fontSizes.l}px;
  color: black;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.xl}px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    font-size: ${p => p.theme.fontSizes.xxl}px;
  }
`;
