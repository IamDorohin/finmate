import styled from 'styled-components';

export const ExpensesSectionContainer = styled.section`
  padding: 10px 15px;
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

export const ExpensesSectionWrapper = styled.div``;

export const SectionListWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
