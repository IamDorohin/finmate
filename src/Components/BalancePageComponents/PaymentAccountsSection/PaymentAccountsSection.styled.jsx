import styled from 'styled-components';

export const SectionContainer = styled.section`
  margin-top: 16px;
`;

export const SectionList = styled.ul`
  /* justify-content: space-between; */
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
    height: 174px;
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

  :nth-last-child(-n + 2) {
    margin-right: 0;
  }

  :nth-child(2n) {
    margin-bottom: 0px;
  }

  @media screen and (min-width: 480px) {
    width: 165px;
    height: 60px;
  }
`;

export const SectionItemLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  padding: 0;
  border: 1px solid #fff;
  border-radius: 50%;

  @media screen and (min-width: 480px) {
    height: 48px;
    width: 48px;
  }

  @media screen and (min-width: 768px) {
    height: 60px;
    width: 60px;
  }
`;

export const SectionItemLogoChanger = styled.div`
  height: 20px;
  width: 20px;

  @media screen and (min-width: 480px) {
    height: 30px;
    width: 30px;
  }

  /* @media screen and (min-width: 768px) {
    height: 60px;
    width: 60px;
  } */
`;

export const SectionItemData = styled.div`
  margin: 0;
  margin-left: 8px;
`;

export const SectionItemDataTitle = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-size: 10px;
  color: #fff;

  @media screen and (min-width: 480px) {
    font-size: 12px;
  }
`;

export const SectionItemDataAmount = styled.p`
  margin: 0;
  font-size: 10px;
  color: #fff;

  @media screen and (min-width: 480px) {
    font-size: 12px;
  }
`;
