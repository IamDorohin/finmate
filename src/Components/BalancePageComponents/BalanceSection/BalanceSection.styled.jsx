import styled from 'styled-components';

export const BalanceSection = styled.section`
  padding-top: 16px;
`;

export const BalanceContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 100px;
  padding: 12px 16px;
  /* background-color: #10610e; */
  background-color: #124720;
  border-radius: 10px;
`;

export const BalanceSummary = styled.div`
  /* height: 100px;
  padding: 12px 16px;
  /* background-color: #10610e; */
  background-color: #124720;
  border-radius: 10px;
`;

export const BalanceTitle = styled.p`
  margin: 0;
  font-size: 16px;
  color: #fff;
`;

export const BalanceText = styled.p`
  margin: 0;
  margin-top: 16px;
  font-size: 12px;
  color: #fff;
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
`;
