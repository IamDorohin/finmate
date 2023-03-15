import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
    from {
    transform: rotateY(-90deg);
  }
  to {
    transform: rotateY(0deg);
  }
`;

export const SettingsCardContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 180px;
  height: 180px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 15px;

  border: 1px solid black;

  border-radius: ${p => p.theme.radii.l};
  font-weight: bold;
  background-color: ${p => p.theme.colors.logoBackground};
  color: ${p => p.theme.colors.logoColor};
  cursor: pointer;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    height: 130px;
    width: 130px;
    margin: 0;
    padding: 12px;
    margin-top: 0;
    border: 1px solid black;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    height: 180px;
    width: 180px;
    padding: 20px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    height: 200px;
    width: 200px;
    padding: 40px;
  }

  animation: ${props => {
    if (props.onClick) {
      return css`
        ${rotate} 0.7s 1 linear
      `;
    }
  }};
`;

export const UserProfileLogoContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 8px;
  right: 8px;
  height: 16px;
  width: 16px;
  color: ${p => p.theme.colors.logoColor};
  cursor: pointer;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    top: 6px;
    right: 6px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    top: 8px;
    right: 8px;
    height: 24px;
    width: 24px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    top: 12px;
    right: 12px;
  }
`;

export const SettingsCardContent = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    font-size: ${p => p.theme.fontSizes.s};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;
