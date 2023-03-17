import { FiMail } from 'react-icons/fi';
import {
  FooterSupportContainer,
  FooterSupportDecor,
  FooterSupportTitle,
  FooterSupportList,
  FooterSupportItem,
  FooterSupportLink,
} from './FooterSupport.styled';

export const FooterSupport = () => {
  return (
    <FooterSupportContainer>
      <FooterSupportDecor />
      <FooterSupportList>
        <FooterSupportItem>
          <FooterSupportLink
            href="mailto:iamdorohin@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FiMail size={'100%'} />
          </FooterSupportLink>
        </FooterSupportItem>
      </FooterSupportList>
      <FooterSupportTitle>Send mail to support</FooterSupportTitle>
    </FooterSupportContainer>
  );
};
