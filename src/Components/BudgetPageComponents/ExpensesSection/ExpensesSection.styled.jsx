import styled from 'styled-components';

export const ExpensesSectionContainer = styled.section`
  margin-top: 16px;
`;

export const FlexContainer = styled.div`
  @media screen and (min-width: 480px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ExpensesSectionWrapper = styled.div`
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

  @media screen and (min-width: 768px) {
    height: 160px;
    width: 480px;
    padding: 20px;
  }

  @media screen and (min-width: 1200px) {
    /* height: 200px;
    width: 600px;
    padding: 40px; */
    width: 680px;
    height: 180px;
  }
`;
