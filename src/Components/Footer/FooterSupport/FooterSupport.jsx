import { FiMail } from 'react-icons/fi';
import {
  FooterSupportContainer,
  FooterSupportTitle,
  FooterSupportList,
  FooterSupportItem,
  FooterSupportLink,
} from './FooterSupport.styled';

export const FooterSupport = () => {
  return (
    <FooterSupportContainer>
      <FooterSupportTitle>Send mail to support</FooterSupportTitle>
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
    </FooterSupportContainer>
  );
};
