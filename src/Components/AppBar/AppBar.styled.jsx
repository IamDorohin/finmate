import styled from 'styled-components';

export const AppHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #fff;
`;

export const AppHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 16px 0;
  margin-left: 0;
  margin-right: 0;
  background-color: #fff;

  @media screen and (min-width: 480px) {
    justify-content: end;
  }
`;
