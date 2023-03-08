import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* background-color: rgba(0, 0, 0, 0.5); */
  background-color: #fff;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding-left: 15px;
  padding-right: 15px;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
`;

// export const ModalHeaderContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding-left: 15px;
//   padding-right: 15px;
// `;

// export const ModalCloseButton = styled.button`
//   /* position: absolute;
//   top: 10px;
//   right: 0px; */
//   width: 30px;
//   height: 30px;
//   border-radius: 5px;
//   background-color: transparent;
// `;
