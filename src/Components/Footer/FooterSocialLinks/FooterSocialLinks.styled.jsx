import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterSocialLinksContainer = styled.div`
  position: relative;
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
  position: absolute;
  top: 20px;
  left: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  transition: transform 250ms ease-in-out;

  ${FooterSocialLinksContainer}:hover & {
    transform: scale(1.2);
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    top: 24px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    top: 30px;
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
    margin-left: 20px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    height: 40px;
    width: 40px;
    &:not(:first-child) {
      margin-left: 16px;
    }
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    height: 50px;
    width: 50px;

    &:not(:first-child) {
      margin-left: 18px;
    }
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
