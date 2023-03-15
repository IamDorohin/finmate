import styled from 'styled-components';

export const LogoutContainer = styled.div`
  width: 140px;
  height: 42px;
  border-radius: 16px;
  color: ${p => p.theme.colors.logoColor};
`;

export const LogoutButtonWrapper = styled.button`
  height: 42px;
  width: 70px;
  border-radius: ${p => p.theme.radii.ml};
`;
