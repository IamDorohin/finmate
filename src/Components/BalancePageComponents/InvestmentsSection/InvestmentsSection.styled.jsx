import styled from 'styled-components';

export const SectionContainer = styled.section`
  margin-top: 16px;
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
`;

export const SectionItem = styled.li`
  display: block;
  width: 80px;
  height: 90px;
  margin-right: 8px;
  padding: 8px 8px;
  border: 1px solid black;
  border-radius: 10px;
  list-style: none;
  background-color: #000;

  :nth-last-child {
    margin-right: 0;
  }

  @media screen and (min-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

export const SectionItemLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
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
  margin-top: 12px;
  padding-left: 2px;
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
// export const SectionContainer = styled.section`
//   margin-top: 16px;
// `;

// export const SectionList = styled.ul`
//   margin: 0;
//   margin-top: 16px;
//   padding-left: 0;
//   overflow-x: scroll;
//   scroll-behavior: smooth;
//   height: 92px;

//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
// `;

// export const SectionItem = styled.li`
//   display: flex;
//   align-items: center;
//   width: 110px;
//   height: 70px;
//   margin-right: 8px;
//   padding: 4px 8px;
//   border: 1px solid black;
//   border-radius: 10px;
//   list-style: none;
//   background-color: #000;

//   :nth-last-child {
//     margin-right: 0;
//   }
// `;

// export const SectionItemLogo = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 40px;
//   width: 40px;
//   padding: 0;
//   border: 1px solid #fff;
//   border-radius: 50%;
// `;

// export const SectionItemData = styled.div`
//   margin: 0;
//   margin-left: 8px;
// `;

// export const SectionItemDataTitle = styled.p`
//   margin: 0;
//   margin-bottom: 4px;
//   font-size: 10px;
//   color: #fff;
// `;

// export const SectionItemDataAmount = styled.p`
//   margin: 0;
//   font-size: 10px;
//   color: #fff;
// `;
