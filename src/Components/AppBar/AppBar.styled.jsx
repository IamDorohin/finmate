import styled from 'styled-components';

export const AppHeader = styled.header``;

export const AppHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 16px 0;
  margin-left: 0;
  margin-right: 0;

  @media screen and (min-width: 480px) {
    justify-content: end;
  }
`;
