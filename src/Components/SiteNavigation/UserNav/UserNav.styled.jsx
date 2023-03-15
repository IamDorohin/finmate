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
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: ${p => p.theme.radii.m};
  /* color: #000; */
  border: 1px solid black;

  :not(:first-child) {
    margin-top: 10px;
  }

  :hover,
  :focus {
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
  text-decoration: none;
  color: inherit;
  font-size: ${p => p.theme.fontSizes.sm};

  ${props =>
    props.status === 'false' &&
    css`
      color: grey;
      pointer-events: none;
      text-decoration: line-through;
    `}

  &.active {
    color: ${p => p.theme.colors.activeLink};
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
