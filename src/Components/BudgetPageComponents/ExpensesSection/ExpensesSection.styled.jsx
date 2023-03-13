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
    /* height: 200px;
    width: 600px;
    padding: 40px; */
    width: 680px;
    height: 180px;
  }
`;

export const SectionListWrapper = styled.div`
  margin-top: 8px;
  padding: 2px 8px;
  /* border: 1px solid #000; */
  border-radius: 20px;
`;

export const SectionList = styled.ul`
  margin: 0;
  margin-top: 16px;
  padding-left: 0;
  overflow-x: scroll;
  scroll-behavior: smooth;
  height: 330px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;

  ::-webkit-scrollbar {
    background-color: #fff;
    border-radius: 10px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 10px;
  }

  @media screen and (min-width: 480px) {
    height: 140px;
  }

  @media screen and (min-width: 769px) {
    height: 170px;
  }

  @media screen and (min-width: 1200px) {
    height: 175px;
  }
`;

export const SectionItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68px;
  height: 80px;
  margin-right: 4px;
  margin-bottom: 12px;
  padding: 4px;
  border: 1px solid black;
  border-radius: 10px;
  list-style: none;
  background-color: #000;
  cursor: pointer;

  :nth-last-child {
    margin-right: 0;
  }

  :nth-child(2n) {
    margin-right: 0px;
  }

  @media screen and (min-width: 480px) {
    width: 90px;
    height: 100px;
    padding: 12px;
  }

  @media screen and (min-width: 768px) {
    width: 110px;
    height: 130px;
    padding: 12px;
  }

  @media screen and (min-width: 1200px) {
    /* width: 140px;
    height: 160px; */
  }
`;

export const SectionItemContent = styled.div`
  display: inline-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-wrap: wrap; */
  flex-direction: column;
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
