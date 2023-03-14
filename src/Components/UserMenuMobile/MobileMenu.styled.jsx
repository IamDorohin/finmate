import styled from 'styled-components';

export const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${props => props.theme.color.primary};

  transition: background-color 250ms ease-in-out;

  transform: translateX(100%);
  transition: transform 250ms ease-in-out;

  transform: ${props => {
    if (props.isOpenedModal) {
      return 'translateX(0)';
    }
  }};

  /* transition: ${props => {
    if (props.isOpenedModal) {
      return 'transform 250ms ease-in-out';
    }
  }}; */
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 62px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const MobileMenuButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 180px;
`;
