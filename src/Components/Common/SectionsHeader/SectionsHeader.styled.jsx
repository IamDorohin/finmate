import styled from 'styled-components';

export const SectionsHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 4px 8px;
  padding-left: 8px;
  padding-right: 8px;
  /* border: 1px solid black; */
  border: ${p => p.theme.borders.sectionsHeader};
  border-radius: ${p => p.theme.radii.m};
  background-color: transparent;
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
  border-radius: ${p => p.theme.radii.xs};
  background-color: ${p => p.theme.colors.balanceBackground};
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
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.primaryText};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    font-size: ${p => p.theme.fontSizes.sm};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const SectionsHeaderDataAmount = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.primaryText};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    font-size: ${p => p.theme.fontSizes.sm};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
