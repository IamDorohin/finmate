import styled from 'styled-components';

export const FooterSection = styled.footer`
  padding: 30px 15px 30px 15px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${props => props.theme.colors.primaryBackground};

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
