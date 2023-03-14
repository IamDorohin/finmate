import styled from 'styled-components';

export const FooterSection = styled.footer`
  padding: 30px 15px 30px 15px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${props => props.theme.color.primary};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    width: ${p => p.theme.breakpoints.mobileM};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: ${p => p.theme.breakpoints.tablet};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    width: ${p => p.theme.breakpoints.desktop};
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
`;

export const FooterSocialLinksContainer = styled.div``;

export const FooterSocialLinksTitle = styled.p`
  margin: 0;
  font-size: 10px;
  font-weight: bold;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    font-size: 18px;
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
  font-size: 18px;

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

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
  }
`;

export const FooterSocialLinks = styled.a`
  text-decoration: none;
  color: #000;
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
