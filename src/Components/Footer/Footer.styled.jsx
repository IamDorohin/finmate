import styled from 'styled-components';

export const FooterSection = styled.footer`
  margin-top: 16px;
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 40px;
  margin-right: 0;
  margin-left: 0;
  padding: 16px 0;
  /* border-top: 1px solid black; */
  background-color: #fff;
`;

export const FooterSocialLinksContainer = styled.div`
  /* display: flex; */
`;

export const FooterSocialLinksTitle = styled.p`
  margin: 0;
  font-size: 10px;
  font-weight: bold;

  @media screen and (min-width: 480px) {
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const FooterSocialLinksList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-top: 12px;
  padding: 0;
`;

export const FooterSocialLinksItems = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  width: 12px;
  font-size: 18px;

  &:not(:first-child) {
    margin-left: 12px;
  }

  /* @media screen and (min-width: 480px) {
    height: 14px;
    width: 14px;
  }

  @media screen and (min-width: 768px) {
    height: 16px;
    width: 16px;
  }

  @media screen and (min-width: 1200px) {
    height: 18px;
    width: 18px;
  } */
`;

export const FooterSocialLinks = styled.a`
  text-decoration: none;
  color: #000;
`;

export const FooterSocialLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  width: 12px;

  @media screen and (min-width: 480px) {
    height: 14px;
    width: 14px;
  }

  @media screen and (min-width: 768px) {
    height: 16px;
    width: 16px;
  }

  @media screen and (min-width: 1200px) {
    height: 18px;
    width: 18px;
  }
`;
