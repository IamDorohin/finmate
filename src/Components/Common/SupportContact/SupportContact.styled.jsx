import styled from 'styled-components';

export const SupportContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 24px;
  border-top: 1px solid black;
`;

export const SupportContactLogo = styled.div`
  color: ${p => p.theme.colors.iconColor};
`;

export const SupportContactLink = styled.a`
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes.sm};
  margin-left: 8px;
  color: ${p => p.theme.colors.primaryText};
`;
