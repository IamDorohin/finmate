import { FooterSocialLinks } from './FooterSocialLinks/FooterSocialLinks';
import { FooterSubscribe } from './FooterSubscribe/FooterSubscribe';
import { FooterSupport } from './FooterSupport/FooterSupport';
import {
  FooterSection,
  FooterContainer,
  // FooterSocialWrapper,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterSocialLinks />
        <FooterSubscribe />
        <FooterSupport />
      </FooterContainer>
    </FooterSection>
  );
};
