import styled from 'styled-components';

export const SectionContainer = styled.section`
  margin-top: 16px;
`;

export const SectionListWrapper = styled.div`
  margin-top: 8px;
  padding: 2px 8px;
  border: 1px solid #000;
  border-radius: 20px;
`;

export const SectionList = styled.ul`
  margin: 0;
  margin-top: 16px;
  padding-left: 0;
  overflow-x: scroll;
  scroll-behavior: smooth;
  height: 120px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;

  @media screen and (min-width: 480px) {
    height: 140px;
  }

  @media screen and (min-width: 769px) {
    height: 170px;
  }

  @media screen and (min-width: 1200px) {
    height: 210px;
  }
`;

export const SectionItem = styled.li`
  display: block;
  width: 80px;
  height: 90px;
  margin-right: 8px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 10px;
  list-style: none;
  background-color: #000;
  cursor: pointer;

  :nth-last-child {
    margin-right: 0;
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
    width: 140px;
    height: 160px;
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
  height: 20px;
  width: 20px;
  margin-bottom: 12px;
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
    width: 70px;
    height: 70px;
    margin-bottom: 18px;
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
  font-size: 10px;
  text-align: center;
  color: #fff;

  @media screen and (min-width: 480px) {
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const SectionItemDataAmount = styled.p`
  margin: 0;
  font-size: 10px;
  text-align: center;
  color: #fff;

  @media screen and (min-width: 480px) {
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;
