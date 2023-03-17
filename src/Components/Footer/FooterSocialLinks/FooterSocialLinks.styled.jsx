import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterSocialLinksContainer = styled.div`
  position: relative;
  padding-top: 10px;
  padding-left: 10px;
`;

export const FooterSocialLinksDecor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 140px;
  height: 30px;
  border-top: 1px solid white;
  border-left: 1px solid white;
  border-top-left-radius: 10px;
`;

export const FooterSocialLinksTitle = styled.p`
  margin: 0;
  font-size: 10px;
  font-weight: bold;
  color: ${p => p.theme.colors.primaryText};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    font-size: ${p => p.theme.fontSizes.sm};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.ml};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    font-size: ${p => p.theme.fontSizes.ml};
  }
`;

export const FooterSocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 0;
  padding: 0;

  /* transition: transform 250ms ease-in-out;

  ${FooterSocialLinksContainer}:hover & {
    transform: scale(1.2);
  } */

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
  }
`;

export const FooterSocialLinksItems = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${p => p.theme.fontSizes.ml};

  height: 24px;
  width: 24px;
  background-color: #000;
  border: 1px solid black;
  border-radius: 50%;

  &:not(:first-child) {
    /* margin-left: 20px; */
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
  }
`;

export const FooterSocialLink = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.iconColor};
  transition: color 250ms ease-in-out, transform 250ms ease-in-out;

  :hover,
  :focus {
    color: ${p => p.theme.colors.acentColor};
    transform: scale(1.2);
  }
`;

export const FooterSocialLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  width: 12px;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    height: 20px;
    width: 20px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    height: 24px;
    width: 24px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    height: 18px;
    width: 18px;
  }
`;
