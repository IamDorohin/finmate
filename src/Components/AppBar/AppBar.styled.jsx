import styled from 'styled-components';

export const AppHeader = styled.header``;

export const AppHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px 15px;
  padding-bottom: 0;
  margin-left: 0;
  margin-right: 0;

  ::after {
    content: '';
    width: 100%;
    padding-top: 15px;
    border-bottom: 1px solid #000;
  }
`;
