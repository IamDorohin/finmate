import styled from 'styled-components';

export const SectionContainer = styled.section`
  margin-top: 16px;
`;

export const SectionListWrapper = styled.div`
  /* border-radius: 20px; */
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
  display: flex;
  align-items: center;
  width: calc(100% / 2 - 8px);
  height: 50px;
  margin-bottom: 12px;
  margin-right: 8px;
  padding: 4px 8px;
  border: 1px solid black;
  border-radius: 10px;
  list-style: none;
  background-color: #000;
  cursor: pointer;

  @media screen and (min-width: 480px) {
    padding: 8px;
    height: 60px;
  }

  @media screen and (min-width: 768px) {
    width: calc(100% / 3 - 8px);
    height: 70px;
  }

  @media screen and (min-width: 1200px) {
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
  border: 1px solid #fff;
  border-radius: 50%;

  @media screen and (min-width: 480px) {
    height: 40px;
    width: 40px;
    padding: 8px;
  }

  @media screen and (min-width: 768px) {
    height: 50px;
    width: 50px;
  }
`;

export const SectionItemData = styled.div`
  margin: 0;
  margin-left: 8px;

  @media screen and (min-width: 480px) {
    margin-left: 16px;
  }
`;

export const SectionItemDataTitle = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-size: 12px;
  color: #fff;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;

export const SectionItemDataAmount = styled.p`
  margin: 0;
  font-size: 12px;
  color: #fff;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;
