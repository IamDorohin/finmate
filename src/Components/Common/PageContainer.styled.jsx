import styled from 'styled-components';

export const PageContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 480px) {
    width: 480px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1200px) {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
`;
