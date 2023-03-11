import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserMenuNav = styled.nav``;

export const UserMenuList = styled.ul`
  display: block;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-right: 0;
  margin-left: 0;
  text-align: center;
  padding-left: 0;

  @media screen and (min-width: 480px) {
    display: flex;
    flex-wrap: nowrap;
    /* width: 300px; */
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const UserMenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  width: 220px;
  height: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 10px;
  color: #000;
  border: 1px solid #000;
  :first-child {
    /* border-top: 1px solid #000; */
  }

  :not(:first-child) {
    margin-top: 10px;
  }

  :hover,
  :focus {
    color: #0cc9eb;
  }

  @media screen and (min-width: 480px) {
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
`;

export const UserMenuLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 12px;

  &.active {
    color: #fac507;
  }

  @media screen and (min-width: 480px) {
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;
