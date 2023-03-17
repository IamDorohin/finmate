import { FooterSocialLinks } from './FooterSocialLinks/FooterSocialLinks';
import { FooterSupport } from './FooterSupport/FooterSupport';
import {
  FooterSection,
  FooterContainer,
  FooterSocialWrapper,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterSocialWrapper>
          <FooterSocialLinks />
          <FooterSupport />
        </FooterSocialWrapper>
      </FooterContainer>
    </FooterSection>
  );
};
