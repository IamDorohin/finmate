import { FooterSocialLinks } from './FooterSocialLinks/FooterSocialLinks';
import { FooterSection, FooterContainer } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterSocialLinks />
      </FooterContainer>
    </FooterSection>
  );
};
