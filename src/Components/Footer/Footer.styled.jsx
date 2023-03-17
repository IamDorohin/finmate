import styled from 'styled-components';

export const FooterSection = styled.footer`
  padding: 15px 15px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${props => props.theme.colors.primaryBackground};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    width: ${p => p.theme.breakpoints.mobileM};
    height: 150px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: ${p => p.theme.breakpoints.tablet};
    height: 200px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    width: ${p => p.theme.breakpoints.desktop};
    height: 250px;
  }
`;

export const FooterContainer = styled.div`
  display: block;
`;

export const FooterSocialWrapper = styled.div``;
