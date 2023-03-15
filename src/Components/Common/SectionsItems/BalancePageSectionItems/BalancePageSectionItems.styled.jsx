import styled from 'styled-components';

export const SectionList = styled.ul`
  margin: 0;
  margin-bottom: -12px;
  margin-right: -8px;
  padding-left: 0;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const SectionItem = styled.li`
  display: flex;
  align-items: center;
  width: calc(100% / 2 - 8px);
  height: 50px;
  margin-bottom: 12px;
  margin-right: 8px;
  padding: 4px 8px;
  border: 1px solid black;
  border-radius: ${p => p.theme.radii.m};
  list-style: none;
  background-color: ${p => p.theme.colors.itemsBackground};
  color: ${p => p.theme.colors.itemsText};
  cursor: pointer;

  :hover,
  :focus {
    color: ${p => p.theme.colors.hoverColor};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    padding: 8px;
    height: 60px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: calc(100% / 3 - 8px);
    height: 70px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    width: calc(100% / 4 - 8px);
    height: 80px;
  }
`;

export const SectionItemLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  padding: 4px;
  border: 1px solid white;
  border-radius: ${p => p.theme.radii.round};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    height: 40px;
    width: 40px;
    padding: 8px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    height: 50px;
    width: 50px;
  }
`;

export const SectionItemData = styled.div`
  margin: 0;
  margin-left: 8px;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    margin-left: 16px;
  }
`;

export const SectionItemDataTitle = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-size: ${p => p.theme.fontSizes.s};

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.sm};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const SectionItemDataAmount = styled.p`
  margin: 0;
  font-size: ${p => p.theme.fontSizes.s};

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.sm};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
