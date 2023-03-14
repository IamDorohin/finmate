import styled from 'styled-components';

export const ExpensesSectionContainer = styled.section`
  padding: 10px 15px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${props => props.theme.color.primary};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    width: ${p => p.theme.breakpoints.mobileM};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: ${p => p.theme.breakpoints.tablet};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    width: ${p => p.theme.breakpoints.desktop};
  }
`;

export const ExpensesSectionWrapper = styled.div``;

export const SectionListWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

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
  align-items: center;
  width: calc(100% / 3 - 8px);
  height: 90px;
  margin-bottom: 12px;
  margin-right: 8px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 10px;
  list-style: none;
  background-color: #000;
  cursor: pointer;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    width: calc(100% / 4 - 8px);
    height: 120px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: calc(100% / 5 - 8px);
    height: 145px;
    padding: 12px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    width: calc(100% / 6 - 8px);
    height: 160px;
  }
`;

export const SectionItemLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  height: 36px;
  width: 36px;
  border: 1px solid #fff;
  border-radius: 50%;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    height: 46px;
    width: 46px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    height: 70px;
    width: 70px;
  }
`;

export const SectionItemData = styled.div`
  margin: 0;
  margin-top: 8px;
  display: block;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    margin-top: 12px;
  }
`;

export const SectionItemDataTitle = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-size: 8px;
  text-align: center;
  color: #fff;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    font-size: 16px;
  }
`;

export const SectionItemDataAmount = styled.p`
  margin: 0;
  font-size: 8px;
  text-align: center;
  color: #fff;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    font-size: 16px;
  }
`;
