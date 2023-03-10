import { FiMail } from 'react-icons/fi';
import { AiOutlineGithub } from 'react-icons/ai';
import { TbBrandLinkedin } from 'react-icons/tb';
import {
  FooterSection,
  FooterContainer,
  FooterSocialLinksContainer,
  FooterSocialLinksTitle,
  FooterSocialLinksList,
  FooterSocialLinksItems,
  FooterSocialLinks,
} from './Footer.styled';
import { PageContainer } from 'Components/Common/PageContainer.styled';
export const Footer = () => {
  return (
    <FooterSection>
      <PageContainer>
        <FooterContainer>
          <FooterSocialLinksContainer>
            <FooterSocialLinksTitle>
              Developer social links
            </FooterSocialLinksTitle>
            <FooterSocialLinksList>
              <FooterSocialLinksItems>
                <FooterSocialLinks href="mailto:iamdorohin@gmail.com">
                  <FiMail />
                </FooterSocialLinks>
              </FooterSocialLinksItems>
              <FooterSocialLinksItems>
                <FooterSocialLinks
                  href="https://github.com/IamDorohin"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <AiOutlineGithub />
                </FooterSocialLinks>
              </FooterSocialLinksItems>
              <FooterSocialLinksItems>
                <FooterSocialLinks
                  href="https://www.linkedin.com/in/iamdorohin/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <TbBrandLinkedin />
                </FooterSocialLinks>
              </FooterSocialLinksItems>
            </FooterSocialLinksList>
          </FooterSocialLinksContainer>
        </FooterContainer>
      </PageContainer>
    </FooterSection>
  );
};
