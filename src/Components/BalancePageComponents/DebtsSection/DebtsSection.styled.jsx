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
  height: 124px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;

  @media screen and (min-width: 480px) {
    height: 164px;
  }

  @media screen and (min-width: 768px) {
    height: 184px;
  }

  @media screen and (min-width: 1200px) {
    height: 210px;
  }
`;

export const SectionItem = styled.li`
  display: flex;
  align-items: center;
  width: 110px;
  height: 40px;
  margin-bottom: 12px;
  margin-right: 8px;
  padding: 4px 8px;
  border: 1px solid black;
  border-radius: 10px;
  list-style: none;
  background-color: #000;
  cursor: pointer;

  :nth-last-child(-n + 2) {
    margin-right: 0;
  }

  :nth-child(2n) {
    margin-bottom: 0px;
  }

  @media screen and (min-width: 480px) {
    width: 150px;
    height: 60px;
  }

  @media screen and (min-width: 768px) {
    width: 185px;
    height: 70px;
  }

  @media screen and (min-width: 1200px) {
    width: 210px;
    height: 80px;
  }
`;

export const SectionItemLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  padding: 4px;
  border: 1px solid #fff;
  border-radius: 50%;

  @media screen and (min-width: 480px) {
    height: 32px;
    width: 32px;
    padding: 8px;
  }

  @media screen and (min-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

export const SectionItemData = styled.div`
  margin: 0;
  margin-left: 8px;

  @media screen and (min-width: 1200px) {
    margin-left: 12px;
  }
`;

export const SectionItemDataTitle = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-size: 10px;
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
