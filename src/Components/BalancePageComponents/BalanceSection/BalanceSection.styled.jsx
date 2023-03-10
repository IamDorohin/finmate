import styled from 'styled-components';

export const BalanceSection = styled.section`
  padding-top: 16px;
`;

export const FlexContainer = styled.div`
  @media screen and (min-width: 480px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const BalanceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 92px;
  padding: 12px;
  background-color: #124720;
  border-radius: 10px;

  @media screen and (min-width: 480px) {
    height: 120px;
    width: 260px;
    padding: 20px;
  }
`;

export const BalanceSummary = styled.div`
  /* display: flex; */
  flex-wrap: wrap;
  background-color: #124720;
  border-radius: 10px;
`;

export const BalanceTitle = styled.p`
  margin: 0;
  font-size: 12px;
  color: #fff;

  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
`;

export const BalanceContent = styled.p`
  margin: 0;
  margin-top: 16px;
  font-size: 12px;
  color: #fff;

  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
`;

export const BalanceAmount = styled.div`
  margin-top: 16px;
  background-color: #000;
  border-radius: 10px;
  width: 134px;
  height: 28px;
`;

export const BalanceAmountContent = styled.p`
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
  font-size: 12px;

  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
`;

export const BalanceChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: #000;

  @media screen and (min-width: 480px) {
    width: 110px;
    height: 110px;
  }
`;
