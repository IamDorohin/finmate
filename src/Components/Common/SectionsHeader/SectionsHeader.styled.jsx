import styled from 'styled-components';

export const SectionsHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

export const SectionsHeaderData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SectionsHeaderDataTitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 12px;
`;

export const SectionsHeaderDataAmount = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 12px;
`;
