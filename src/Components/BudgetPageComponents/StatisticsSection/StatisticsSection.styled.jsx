import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  padding-top: 12px;
`;

export const FlexContainer = styled.div`
  @media screen and (min-width: 480px) {
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
