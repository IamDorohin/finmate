import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserNavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 1px solid ${p => p.theme.colors.bwInverted};
  margin-left: 40px;
  padding: 6px;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    margin-left: 304px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    margin-left: 400px;
    padding-right: 24px;
  }
`;

export const UserNavMenu = styled.nav``;

export const UserNavList = styled.ul`
  display: block;
  margin: 0;
  margin-top: 66px;
  padding-left: 0;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    display: flex;
    flex-wrap: nowrap;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const UserNavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 180px;
  height: 60px;
  /* padding-top: 15px;
  padding-bottom: 15px; */
  padding: 0;
  border-radius: ${p => p.theme.radii.m};
  border: 1px solid black;
  transition: color 250ms ease-in-out;

  :not(:first-child) {
    margin-top: 10px;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.hoverColor};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    width: 70px;
    height: 30px;
    padding: 0;
    margin-left: 0;
    margin-right: 0;
    border: none;

    :not(:first-child) {
      margin-top: 0;
      margin-left: 10px;
    }
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    :not(:first-child) {
      margin-top: 0;
      margin-left: 48px;
    }
  }
`;

export const UserNavLink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  text-decoration: none;
  color: ${p => p.theme.colors.bwInverted};
  font-size: ${p => p.theme.fontSizes.sm};

  &:hover,
  :focus {
    color: ${p => p.theme.colors.hoverColor};
  }

  ${p =>
    p.status === 'false' &&
    css`
      color: ${p => p.theme.colors.bwInverted};
      pointer-events: none;
    `}

  &.active {
    color: ${p => p.theme.colors.acentColor};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    font-size: ${p => p.theme.fontSizes.sm};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.m};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

export const UserNavLinkDescription = styled.p`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 30px;
  left: 57px;
  font-size: ${p => p.theme.fontSizes.hoverS};
  color: ${p => p.theme.colors.acentColor};
  visibility: hidden;

  transition: visibility 250ms ease-in-out, top 250ms ease-in-out;

  ${UserNavItem}:hover & {
    visibility: visible;
    top: 40px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    top: 15px;
    left: 5px;

    ${UserNavItem}:hover & {
      visibility: visible;
      top: 28px;
    }
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktopL}) {
    font-size: ${p => p.theme.fontSizes.hoverM};
    left: 4px;
  }
`;

export const UserNavLinkDecor = styled.div`
  position: absolute;
  top: 28px;
  left: 60px;
  height: 2px;
  width: 0px;
  background-color: ${p => p.theme.colors.acentColor};

  transition: width 250ms ease-in-out;

  ${UserNavItem}:hover & {
    width: 58px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.mobileM}) {
    top: 15px;
    left: 7px;
  }
`;
