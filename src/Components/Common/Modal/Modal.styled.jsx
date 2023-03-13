import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: absolute;
  overflow-y: hidden;
  top: 50%;
  left: 50%;
  padding-left: 15px;
  padding-right: 15px;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  background-color: #fff;

  @media screen and (min-width: 480px) {
    width: 400px;
    height: 600px;
    border-radius: 20px;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 16px;
  right: 26px;
  width: 40px;
  height: 40px;
  border: none;
  /* border-radius: 5px; */
  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 480px) {
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
  }
`;
