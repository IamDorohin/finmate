import styled from 'styled-components';

export const SectionsHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 4px 8px;
  padding-left: 8px;
  padding-right: 8px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: #a2a6a3;
`;

export const SectionsHeaderAddButton = styled.button`
  padding: 0;
  width: 20px;
  height: 20px;
  border: transparent;
  border-radius: 4px;
  background-color: #124720;
`;

export const SectionsHeaderDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 12px;
  width: 100%;
`;

export const SectionsHeaderDataTitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 12px;

  @media screen and (min-width: 480px) {
    font-size: 14px;
  }
`;

export const SectionsHeaderDataAmount = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 12px;

  @media screen and (min-width: 480px) {
    font-size: 14px;
  }
`;