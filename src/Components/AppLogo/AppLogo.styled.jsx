import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppLogoContainer = styled.div`
  /* padding: 5px 10px; */
  padding-left: 0;
  /* padding-left: 10px;
  padding-right: 10px; */
  /* border-radius: 5px; */
  /* border-radius: 50%; */
  /* outline: 1px solid black; */
`;

export const AppLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const AppLogoIconContainer = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 50%;
  background-color: black;
  color: white;
  height: 30px;
  width: 30px;

  &:hover,
  :focus {
    color: #0cc9eb;
  }
`;

export const AppLogoPrimaryEl = styled.div`
  padding-left: 10px;
  font-weight: bold;
  font-size: 20px;
  color: black;
`;

export const AppLogoSecondaryEl = styled.div`
  padding-left: 5px;
  font-weight: bold;
  font-size: 20px;
  color: black;
`;
