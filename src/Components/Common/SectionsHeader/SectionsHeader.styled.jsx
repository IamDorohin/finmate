import styled from 'styled-components';

export const SectionsHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 4px 8px;
  padding-left: 8px;
  padding-right: 8px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: ${props => props.theme.color.primary};
  margin-bottom: 16px;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 520px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    width: 700px;
    height: 40px;
  }
`;

export const SectionsHeaderAddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 20px;
  height: 20px;
  border: transparent;
  border-radius: 4px;
  background-color: #124720;
  cursor: pointer;

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    width: 26px;
    height: 26px;
  }
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

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    font-size: 16px;
  }
`;

export const SectionsHeaderDataAmount = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 12px;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    font-size: 16px;
  }
`;
