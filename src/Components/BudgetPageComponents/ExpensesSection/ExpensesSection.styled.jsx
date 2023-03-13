import styled from 'styled-components';

export const ExpensesSectionContainer = styled.section`
  margin-top: 16px;
`;

export const FlexContainer = styled.div`
  @media screen and (min-width: 480px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ExpensesSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 92px;
  margin-bottom: 16px;
  padding: 12px;
  background-color: #124720;
  border-radius: 10px;

  @media screen and (min-width: 480px) {
    height: 120px;
    width: 260px;
    padding: 20px;
  }

  @media screen and (min-width: 768px) {
    height: 160px;
    width: 480px;
    padding: 20px;
  }

  @media screen and (min-width: 1200px) {
    width: 680px;
    height: 180px;
  }
`;

export const SectionListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 320px;
  margin: 0;
  margin-left: -4px;
  margin-top: -12px;
  padding: 0;

  /* ::-webkit-scrollbar {
    background-color: #fff;
    border-radius: 10px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 10px;
  } */

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    margin-left: -8px;
    margin-top: -16px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
    margin-left: -14px;
    margin-top: -24px;
  }
`;

export const SectionItem = styled.li`
  padding: 0;
  margin: 0;
  list-style: none;
  width: calc(100% / 4 - 4px);
  height: 90px;
  margin-left: 4px;
  margin-top: 12px;
  border-radius: 10px;
  background-color: #000;
  cursor: pointer;

  @media screen and (min-width: 480px) {
    width: calc(100% / 4 - 4px);
    height: 120px;
  }

  @media screen and (min-width: 768px) {
    width: calc(100% / 5 - 8px);
    height: 145px;
    margin-left: 8px;
    margin-top: 16px;
  }

  @media screen and (min-width: 1200px) {
    width: calc(100% / 6 - 14px);
    height: 160px;
    margin-left: 14px;
    margin-top: 24px;
  }
`;

export const SectionItemContent = styled.div`
  /* display: inline; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 8px 4px;
`;

export const SectionItemLogo = styled.div`
  height: 16px;
  width: 16px;
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid #fff;
  border-radius: 50%;

  @media screen and (min-width: 480px) {
    height: 40px;
    width: 40px;
  }

  @media screen and (min-width: 768px) {
    height: 60px;
    width: 60px;
  }

  @media screen and (min-width: 1200px) {
    /* width: 70px;
    height: 70px;
    margin-bottom: 18px; */
  }
`;

export const SectionItemData = styled.div`
  margin: 0;
  padding-left: 2px;
  display: contents;

  @media screen and (min-width: 480px) {
    margin-top: 18px;
  }
`;

export const SectionItemDataTitle = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-size: 8px;
  text-align: center;
  color: #fff;

  @media screen and (min-width: 480px) {
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;

export const SectionItemDataAmount = styled.p`
  margin: 0;
  font-size: 8px;
  text-align: center;
  color: #fff;

  @media screen and (min-width: 480px) {
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;
