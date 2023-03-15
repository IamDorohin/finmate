import styled from 'styled-components';

export const BalanceSection = styled.section`
  padding: 10px 15px;
  padding-top: 70px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${props => props.theme.colors.primaryBackground};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
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

export const BalanceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: 12px;
  background-color: #124720;
  border-radius: 20px;

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

export const BalanceSummary = styled.div`
  background-color: ${p => p.theme.colors.balanceBackground};
  border-radius: ${p => p.theme.radii.m};
`;

export const BalanceTitle = styled.p`
  margin: 0;
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.statisticText};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    font-size: ${p => p.theme.fontSizes.sm};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

export const BalanceContent = styled.p`
  margin: 0;
  margin-top: 16px;
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.statisticText};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    font-size: ${p => p.theme.fontSizes.sm};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.l};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    margin-top: 26px;
  }
`;

export const BalanceAmount = styled.div`
  margin-top: 16px;
  background-color: ${p => p.theme.colors.logoBackground};
  border-radius: ${p => p.theme.radii.m};
  width: 134px;
  height: 30px;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 160px;
    height: 40px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    width: 200px;
    height: 32px;
  }
`;

export const BalanceAmountContent = styled.p`
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${p => p.theme.colors.logoColor};
  font-size: ${p => p.theme.fontSizes.s};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    font-size: ${p => p.theme.fontSizes.sm};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.l};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    margin-top: 26px;
  }
`;

export const BalanceChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border: 1px solid #000;
  border-radius: ${p => p.theme.radii.m};
  background-color: ${p => p.theme.colors.logoBackground};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    width: 110px;
    height: 110px;
  }
`;
