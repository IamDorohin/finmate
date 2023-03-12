import styled from 'styled-components';

export const MobileMenuModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  background: rgba(0, 0, 0, 0.5);
`;

export const MobileMenuModalContent = styled.div`
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

export const MobileMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 16px 15px;
  margin-left: 0;
  margin-right: 0;

  @media screen and (min-width: 480px) {
    justify-content: end;
  }
`;

export const MobileMenuButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 210px;
`;
