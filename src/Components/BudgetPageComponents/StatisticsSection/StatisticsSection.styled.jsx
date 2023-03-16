import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  padding: 10px 15px;
  padding-top: 70px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${props => props.theme.colors.primaryBackground};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    position: relative;
    padding: 10px 15px;
    width: ${p => p.theme.breakpoints.mobileM};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: ${p => p.theme.breakpoints.tablet};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    width: ${p => p.theme.breakpoints.desktop};
  }
`;

export const FlexContainer = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const StatisticsDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: 12px;
  background-color: ${p => p.theme.colors.balanceBackground};
  border-radius: ${p => p.theme.radii.l};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    height: 130px;
    width: 290px;
    padding: 16px 30px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    height: 180px;
    width: 520px;
    padding: 20px 30px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    padding: 40px;
    width: 700px;
    height: 200px;
  }
`;
