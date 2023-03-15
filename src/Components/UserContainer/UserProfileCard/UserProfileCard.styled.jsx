import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
    from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
`;

export const UserProfileCardContainer = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 12px;
  border: 1px solid black;
  background-color: ${p => p.theme.colors.logoBackground};

  border-radius: ${p => p.theme.radii.l};
  cursor: pointer;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    height: 130px;
    width: 130px;
    margin: 0;
    padding: 12px;
    margin-top: 0;
    border: 1px solid black;
    background-color: ${p => p.theme.colors.logoBackground};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    height: 180px;
    width: 180px;
    padding: 20px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    height: 200px;
    width: 200px;
  }

  animation: ${props => {
    if (props.onClick) {
      return css`
        ${rotate} 0.7s 1 linear
      `;
    }
  }};
`;

export const UserProfileAvatar = styled.div`
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  border-radius: ${p => p.theme.radii.round};
  /* background-color: #0cc9eb; */
  background-color: ${p => p.theme.colors.logoColor};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    width: 70px;
    height: 70px;
    background-color: ${p => p.theme.colors.logoColor};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 100px;
    height: 100px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    height: 120px;
    width: 120px;
  }
`;

export const UserProfileNickname = styled.p`
  margin: 0;
  margin-top: 24px;
  text-align: center;
  font-weight: bold;
  font-size: ${p => p.theme.fontSizes.sm};
  color: ${p => p.theme.colors.logoColor};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    margin-top: 10px;
    padding: 0;
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    margin-top: 16px;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const SettingsLogoContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  width: 16px;
  color: ${p => p.theme.colors.logoColor};
  cursor: pointer;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    top: 6px;
    right: 6px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    height: 24px;
    width: 24px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    top: 12px;
    right: 12px;
  }
`;

export const CardsContainer = styled.div`
  width: 180px;
  height: 180px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 15px;
  border: 2px solid black;
  border-radius: ${p => p.theme.radii.l};
`;

// @media screen and (min-width: 480px) {
// }
