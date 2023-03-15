import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 999;
  background-color: ${p => p.theme.colors.modalBackdropColor};
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
  overflow: hidden;

  background-color: ${p => p.theme.colors.primaryBackground};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    width: 400px;
    height: 600px;
    border-radius: ${p => p.theme.radii.l};
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  color: ${p => p.theme.colors.iconColor};
  cursor: pointer;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
  }
`;
