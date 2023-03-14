import styled from 'styled-components';

export const BalanceSection = styled.section`
  padding-top: 12px;
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
  height: 120px;
  padding: 12px;
  background-color: #124720;
  border-radius: 20px;

  @media screen and (min-width: 480px) {
    height: 130px;
    width: 290px;
    padding: 16px 30px;
  }

  @media screen and (min-width: 768px) {
    height: 180px;
    width: 520px;
    padding: 20px 30px;
  }

  @media screen and (min-width: 1200px) {
    padding: 40px;
    width: 700px;
    height: 200px;
  }
`;

export const BalanceSummary = styled.div`
  /* flex-wrap: wrap; */
  background-color: #124720;
  border-radius: 10px;
`;

export const BalanceTitle = styled.p`
  margin: 0;
  font-size: 12px;
  color: #fff;

  @media screen and (min-width: 480px) {
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const BalanceContent = styled.p`
  margin: 0;
  margin-top: 16px;
  font-size: 12px;
  color: #fff;

  @media screen and (min-width: 480px) {
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
    margin-top: 26px;
  }
`;

export const BalanceAmount = styled.div`
  margin-top: 16px;
  background-color: #000;
  border-radius: 10px;
  width: 134px;
  height: 30px;

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 40px;
  }

  @media screen and (min-width: 1200px) {
    width: 200px;
    height: 32px;
    /* width: 220px;
    height: 48px; */
  }
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
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
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
  border-radius: 10px;
  background-color: #000;

  @media screen and (min-width: 480px) {
    width: 110px;
    height: 110px;
  }
`;
