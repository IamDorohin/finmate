import styled, { css, keyframes } from 'styled-components';

const anim = keyframes`
    from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const UserProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin-top: 12px;
`;

export const UserProfileCardContainer = styled.div`
  position: absolute;
  width: 180px;
  height: 180px;

  margin-left: auto;
  margin-right: auto;
  padding: 18px;
  border: 1px solid black;
  background-color: ${p => p.theme.colors.logoBackground};
  border-radius: ${p => p.theme.radii.l};
  cursor: pointer;

  transition: height 250ms ease-in-out;

  ${p =>
    p.settingsStatus &&
    css`
      height: 270px;
    `};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    top: 10px;
    right: 15px;

    height: 130px;
    width: 130px;
    margin: 0;
    padding: 8px;
    margin-top: 0;
    border: 1px solid black;
    background-color: ${p => p.theme.colors.logoBackground};

    ${p =>
      p.settingsStatus &&
      css`
        height: 160px;
      `};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    height: 180px;
    width: 180px;
    padding: 20px;

    ${p =>
      p.settingsStatus &&
      css`
        height: 250px;
      `};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    height: 200px;
    width: 200px;

    ${p =>
      p.settingsStatus &&
      css`
        height: 280px;
      `};
  }
`;

export const UserProfileMainInfo = styled.div`
  position: relative;
  padding-bottom: 20px;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    padding-bottom: 12px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    padding-bottom: 24px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    padding-bottom: 20px;
  }
`;

export const UserProfileHint = styled.p`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 145px;
  left: 34px;
  color: ${p => p.theme.colors.acentColor};
  font-size: 8px;

  opacity: 0;

  ${UserProfileMainInfo}:hover & {
    animation: ${anim} 2s 1 linear;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    top: 100px;
    left: 20px;
    font-size: 8px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    top: 140px;
    left: 25px;
    font-size: 10px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    top: 157px;
    left: 35px;
    font-size: 10px;
  }
`;

export const UserProfileAvatar = styled.div`
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  border-radius: ${p => p.theme.radii.round};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    width: 70px;
    height: 70px;
    background-color: #000;

    transition: height 250ms ease-in-out, height 250ms ease-in-out;

    ${p =>
      p.settingsStatus &&
      css`
        height: 60px;
        width: 60px;
      `};
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

export const UserProfileSettings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserProfileSettingsList = styled.ul`
  padding: 0;
  padding-top: 20px;
  margin: 0;
  border-top: 1px solid #fff;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    padding-top: 12px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    padding-top: 20px;
  }
`;

export const UserProfileSettingsItem = styled.li`
  color: ${p => p.theme.colors.logoColor};
  font-size: 12px;

  :not(:first-child) {
    margin-top: 12px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    font-size: 10px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    font-size: 14px;
  }
`;
