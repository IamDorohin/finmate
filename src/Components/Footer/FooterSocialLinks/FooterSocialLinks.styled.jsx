import styled from 'styled-components';

export const FooterSocialLinksContainer = styled.div``;

export const FooterSocialLinksTitle = styled.p`
  margin: 0;
  font-size: 10px;
  font-weight: bold;
  color: ${p => p.theme.colors.primaryText};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.sm};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    font-size: ${p => p.theme.fontSizes.ml};
  }
`;

export const FooterSocialLinksList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-top: 12px;
  padding: 0;
`;

export const FooterSocialLinksItems = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  width: 12px;
  font-size: ${p => p.theme.fontSizes.ml};

  &:not(:first-child) {
    margin-left: 12px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    &:not(:first-child) {
      margin-left: 16px;
    }
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    &:not(:first-child) {
      margin-left: 24px;
    }
  }
`;

export const FooterSocialLink = styled.a`
  text-decoration: none;
  color: ${p => p.theme.colors.iconColor};
  transition: color 250ms ease-in-out;

  :hover,
  :focus {
    color: ${p => p.theme.colors.acentColor};
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
