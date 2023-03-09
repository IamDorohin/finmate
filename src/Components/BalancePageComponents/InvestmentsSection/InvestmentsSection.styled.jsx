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
`;

export const SectionItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 70px;
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
`;

export const SectionItemData = styled.div`
  margin: 0;
  margin-top: 8px;
  padding-left: 2px;
  width: 54px;
`;

export const SectionItemDataTitle = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-size: 10px;
  color: #fff;
`;

export const SectionItemDataAmount = styled.p`
  margin: 0;
  font-size: 10px;
  color: #fff;
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
