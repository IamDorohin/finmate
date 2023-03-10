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
  position: relative;
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
  /* width: 100%;
  height: 100%; */
  text-decoration: none;
  color: inherit;

  &.active {
    /* border-radius: 10px;
    background-color: #000; */
    color: #fac507;
  }
`;
