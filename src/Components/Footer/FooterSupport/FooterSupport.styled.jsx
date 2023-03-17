import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterSupportContainer = styled.div`
  position: relative;
  text-align: end;
  padding-bottom: 10px;
  padding-right: 10px;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
  }
`;

export const FooterSupportDecor = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 140px;
  height: 30px;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  border-bottom-right-radius: 10px;
`;

export const FooterSupportTitle = styled.p`
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

export const FooterSupportList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 0;
  padding: 0;

  /* transition: transform 250ms ease-in-out;

  ${FooterSupportContainer}:hover & {
    transform: scale(1.2);
  } */

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
  }
`;

export const FooterSupportItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${p => p.theme.fontSizes.ml};

  height: 24px;
  width: 24px;
  background-color: #000;
  border: 1px solid black;
  border-radius: 50%;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    height: 40px;
    width: 40px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    height: 50px;
    width: 50px;
  }
`;

export const FooterSupportLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  width: 12px;
  text-decoration: none;
  color: ${p => p.theme.colors.iconColor};
  /* transition: color 250ms ease-in-out, transform 250ms ease-in-out;

  :hover,
  :focus {
    color: ${p => p.theme.colors.acentColor};
    transform: scale(1.2);
  } */

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
