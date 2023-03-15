import styled from 'styled-components';

export const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${props => props.theme.colors.primaryBackground};

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

export const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
  border-radius: ${p => p.theme.radii.s};
  background-color: transparent;
  color: ${p => p.theme.colors.iconColor};

  :hover,
  :focus {
    color: ${p => p.theme.colors.hoverColor};
  }
`;
