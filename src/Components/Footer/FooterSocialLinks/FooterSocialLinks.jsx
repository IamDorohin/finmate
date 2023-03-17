import { AiOutlineGithub } from 'react-icons/ai';
import { RxLinkedinLogo } from 'react-icons/rx';
import {
  FooterSocialLinksContainer,
  FooterSocialLinksTitle,
  FooterSocialLinksList,
  FooterSocialLinksItems,
  FooterSocialLink,
  FooterSocialLinksWrapper,
} from './FooterSocialLinks.styled';

const socialLinksArray = [
  {
    title: 'linkedIn',
    href: 'https://www.linkedin.com/in/iamdorohin/',
    target: '_blank',
    rel: 'noreferrer noopener',
  },
  {
    title: 'gitHub',
    href: 'https://github.com/IamDorohin',
    target: '_blank',
    rel: 'noreferrer noopener',
  },
];

export const FooterSocialLinks = () => {
  return (
    <FooterSocialLinksContainer>
      <FooterSocialLinksTitle>Developer social links</FooterSocialLinksTitle>
      <FooterSocialLinksList>
        {socialLinksArray.map(({ title, href, target, rel }) => (
          <FooterSocialLinksItems key={title}>
            <FooterSocialLink href={href} target={target} rel={rel}>
              <FooterSocialLinksWrapper>
                {title === 'linkedIn' && <RxLinkedinLogo size={'100%'} />}
                {title === 'gitHub' && <AiOutlineGithub size={'100%'} />}
              </FooterSocialLinksWrapper>
            </FooterSocialLink>
          </FooterSocialLinksItems>
        ))}
      </FooterSocialLinksList>
    </FooterSocialLinksContainer>
  );
};
